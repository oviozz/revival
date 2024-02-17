
import React, { createContext, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import {GenerateObjectID} from "../tools/GenerateObjectID.jsx";
import {QueryClient, useQueryClient} from "@tanstack/react-query";
import {useAuth} from "../auth/AuthContext.jsx";
import toast from "react-hot-toast";

const BuildingChooseContext = createContext();

const BuildingChooseProvider = ({ children }) => {

    const {userInfo} = useAuth();
    const queryClient = useQueryClient()

    const [cardChosenData, setcardChosenData] = useState(null)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { surveyID } = useParams();

    const saveBuildingtoDB = async () => {

        const response = await fetch(`https://propertyestate.vercel.app/createBuilding?survey_id=${surveyID}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({...data["buildingDetail"], _id: GenerateObjectID(), userID: userInfo.uid})
        });

        queryClient.invalidateQueries({ queryKey: ['buildingData', {surveyID}] })
        toast.success("Building has been added")

    }

    const setChooseData = (cardChosenData) => {
        setcardChosenData(JSON.stringify(cardChosenData));
    }

    const fetchBuildingData = async (id, cardChosenData) => {

        setcardChosenData(JSON.stringify(cardChosenData));
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://socalwarehousesapi.vercel.app/getdetails?detailid=${id}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const contextValue = {
        loading,
        fetchBuildingData,
        saveBuildingtoDB,
        cardChosenData,
        data,
        error,

    };

    return (
        <BuildingChooseContext.Provider value={contextValue}>
            {children}
        </BuildingChooseContext.Provider>
    );
};

const useBuildingChoose = () => {
    const context = useContext(BuildingChooseContext);
    if (!context) {
        throw new Error('useBuildingChoose must be used within a BuildingChooseProvider');
    }
    return context;
};

export { BuildingChooseProvider, useBuildingChoose };
