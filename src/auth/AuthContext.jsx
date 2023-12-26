
import React, {createContext, useContext, useEffect, useState} from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../auth/Config.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);

                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setToken(null);
                setUserInfo(null);
            }
        });
        return () => unsubscribe();

    }, []);

    const setAuthToken = (user, accessToken) => {

        localStorage.setItem('token', accessToken);
        localStorage.setItem('user', JSON.stringify(user));

        setToken(accessToken);
        setUserInfo(user);
    };

    const deleteAuthToken = async () => {

        await signOut(auth)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUserInfo(null);
    };


    const authContextValue = {
        token,
        userInfo,
        isAuthenticated,
        setAuthToken,
        deleteAuthToken,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
