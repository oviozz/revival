
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createUserWithEmailAndPassword, getAdditionalUserInfo, signInWithPopup} from 'firebase/auth'
import {auth, provider} from "../auth/Config.jsx";
import {useAuth} from "../auth/AuthContext.jsx";
import {FireBaseError} from "../tools/FireBaseError.jsx";
import {storeUserDB} from "../utils/storeUserDB.jsx";

export const useSignup = () => {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const {setAuthToken} = useAuth();


    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const passwordMatch = () => {

        if (userInfo.password !== userInfo.confirmPassword) {
            setError("Password doesn't match!");
            return false;
        } else {
            setError("");
        }

        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!passwordMatch()){
            return false;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            const user = userCredential.user;

            const additionalUserInfo = getAdditionalUserInfo(userCredential);

            if (additionalUserInfo.isNewUser) {
                await storeUserDB(user, userInfo)
            }

            setAuthToken(user, user.accessToken)
            navigate('/')

        } catch (error){
            setError(error.message);
        } finally {
            setLoading(false);
        }

    };

    const signUpWithGoogle = async () => {

        try {
            setLoading(true);
            const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user

            await storeUserDB(user, userInfo)

            setAuthToken(user, user.accessToken)
            navigate('/')

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }


    }

    return {
        userInfo,
        error,
        loading,
        handleInputChange,
        signUpWithGoogle,
        handleSubmit,
        passwordMatch,
    };
};


