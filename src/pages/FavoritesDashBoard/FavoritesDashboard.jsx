
import React from "react";
import { useAuth } from "../../auth/AuthContext.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import BuildingListCard from "../BuildingDashBoard/BuildingListCard.jsx";
import useFavoriteBuildingData from "../../hooks/useFavoriteData.jsx";
import { countTrueObject } from "../../utils/functions.js";
import {FaHeart} from "react-icons/fa";

const FavoritesDashboard = () => {
    const { userInfo } = useAuth();
    const userID = userInfo.uid;
    const { isPending, favoriteBuildingData, hasFavorites } = useFavoriteBuildingData();

    if (isPending) {
        return <Loader loadingState={isPending} />;
    }

    return (
        <div className={"p-2"}>
            <h1 className={"text-2xl font-semibold mb-4"}>Favorites</h1>

            <div className="flex flex-col gap-5">
                {hasFavorites ? (
                    <div className="flex flex-wrap gap-5">
                        {favoriteBuildingData.map((building) => (
                            building.favorite && <BuildingListCard key={building._id} building={building} userID={userID} />
                        ))}
                    </div>
                ) : (
                    <div className="flex text-2xl text-gray-400 mt-52 flex-col items-center justify-center">
                        <FaHeart size={40} color="#ccc" />
                        <p>No favorite buildings found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FavoritesDashboard;
