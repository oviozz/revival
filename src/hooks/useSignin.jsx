

import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import {auth, provider} from "../auth/Config.jsx";
import {useAuth} from "../auth/AuthContext.jsx";

export const useSignin = () => {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const {setAuthToken} = useAuth();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const userCredential  = await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            const user = userCredential.user;

            setAuthToken(user, user.accessToken)
            navigate('/')

        } catch (error){
            setError(error.message);
        }
    };

    const signInWithGoogle = async () => {

        try {

            const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user

            setAuthToken(user, user.accessToken)
            navigate('/')

        } catch (error) {
            setError(error.message)
        }


    }



    return {
        userInfo,
        error,
        signInWithGoogle,
        handleInputChange,
        handleSubmit,
    };
};

