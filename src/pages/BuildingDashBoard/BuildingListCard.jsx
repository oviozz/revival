
import {FaHeart} from "react-icons/fa";
import BuildingModal from "./BuildingModal.jsx";
import React, {useState} from "react";
import toast from "react-hot-toast";
import useFavoriteBuildingData from "../../hooks/useFavoriteData.jsx";
import {useQueryClient} from "@tanstack/react-query";

export default function BuildingListCard({userCheckIn, building, userID}) {

    const queryClient = useQueryClient();
    const { toggleFavorite } = useFavoriteBuildingData();
    const [favorite, setFavorite] = useState(building?.favorite || false);

    const handleToggleFavorite = async () => {
        setFavorite(prev => !prev);
        await toggleFavorite(building._id);
        // queryClient.invalidateQueries(['favoriteBuildingData', userID]);
    };

    return (
        <div key={building._id} className="select-none relative hover:cursor-pointer lg:max-w-[17rem] w-full bg-white border-gray-200 rounded-lg border-2">

            <div className={"relative"}>
                <img className="rounded-t-lg w-full h-48" src={building.image_links[0]} alt={building.image_links[0]}/>

                {
                    userCheckIn && (
                        <div className={`${favorite ? "text-red-500" : 'text-white'} absolute top-2 right-2`} onClick={handleToggleFavorite}>
                            <FaHeart size={25}/>
                        </div>
                    )
                }
            </div>


            <div className="p-5">

                <div className={'mb-2 leading-7'}>
                    <a href={`https://www.google.com/maps/place/${building.address}`} target={"_blank"} className=" hover:underline mb-3 font-semibold text-xl text-gray-700 dark:text-gray-400" rel="noreferrer">
                        {building.address}
                    </a>
                    <div className={"mt-1"}>
                        {
                            Object.keys(building?.property_facts).length >= 1 && (
                                <div className={"mt-4"}>
                                    <div className={"absolute bottom-0 right-0"}>
                                        <BuildingModal propertyFacts={building?.property_facts} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}