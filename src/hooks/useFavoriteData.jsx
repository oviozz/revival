
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { useParams } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";
import toast from "react-hot-toast";

const FavoriteBuildingDataContext = createContext();

const useFavoriteBuildingData = () => useContext(FavoriteBuildingDataContext);

export const FavoriteBuildingDataProvider = ({ children }) => {
    const { userInfo } = useAuth();
    const userID = userInfo.uid;
    const queryClient = useQueryClient();
    const [hasFavorites, setHasFavorites] = useState(null); // Track if there are any favorite buildings

    const fetchFavoriteBuildingDatas = async () => {
        const res = await fetch(`https://propertyestate.vercel.app/getAllUserBuilding?user_id=${userID}`);
        return res.json();
    };

    const toggleFavorite = async (buildingId) => {
        const response = await fetch(`https://propertyestate.vercel.app/toggleFavorite?building_id=${buildingId}`, {
            method: "POST",
        });

        if (!response.ok) {
            toast.error("Failed to add/remove building from favorites");
        }
        queryClient.invalidateQueries(['favoriteBuildingData', userID]);
    };

    const { isPending, data: favoriteBuildingData } = useQuery({
        queryKey: ['favoriteBuildingData', userID],
        queryFn: () => fetchFavoriteBuildingDatas(),
    });

    useEffect(() => {
        // Check if any building has favorite set to true
        if (favoriteBuildingData) {
            const hasFavorite = favoriteBuildingData.some(building => building.favorite);
            setHasFavorites(hasFavorite);
        }
    }, [favoriteBuildingData]);

    return (
        <FavoriteBuildingDataContext.Provider value={{ favoriteBuildingData, isPending, toggleFavorite, hasFavorites }}>
            {children}
        </FavoriteBuildingDataContext.Provider>
    );
};

export default useFavoriteBuildingData;
