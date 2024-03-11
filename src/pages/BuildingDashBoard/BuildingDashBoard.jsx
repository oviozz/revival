


import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import AddBuildingModal from "./AddBuildingModal.jsx";
import React, {useEffect, useState} from "react";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaBuildingCircleXmark } from "react-icons/fa6";
import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import BuildingCardSkeleton from "./BuildingCardSkeleton.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import {useBuildingChoose} from "../../hooks/useBuildingChoose.jsx";
import {useAuth} from "../../auth/AuthContext.jsx";
import {countUserIDsContainingString} from "../../utils/functions.js";
import BuildingModal from "./BuildingModal.jsx";
import { FaHeart } from "react-icons/fa";
import BuildingListCard from "./BuildingListCard.jsx";
import useFavoriteData from "../../hooks/useFavoriteData.jsx";


const BuildingDashBoard = () => {

    const { surveyID } = useParams();
    const navigate = useNavigate();
    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const { isPending, error, data: buildingData } = useQuery({
        queryKey: ['buildingData', {surveyID}],
        queryFn: () =>
                fetch(`https://propertyestate.vercel.app/getBuilding?building_id=${surveyID}`).then((res) =>
                res.json(),
            ),
    })

    const [userCheckIn, setUserCheckIn] = useState(false);

    useEffect(() => {
        if (buildingData) {

            const buildingLists = buildingData?.buildings
            const countCheckIn = countUserIDsContainingString(buildingLists, userID);
            setUserCheckIn(countCheckIn === buildingData.buildings.length);
        }
    }, [buildingData, userID]);




    if (isPending){
        return (
            <Loader loadingState={isPending} />
        )
    }

    return (
        <div className={''}>

            <div className={"flex flex-col gap-5"}>
                {
                    userCheckIn && (
                        <div className={"lg:block hidden"}>
                            <Breadcrumbs />
                        </div>

                    )
                }

                <div className={"flex lg:flex-row lg:justify-between lg:items-center md:flex-row flex-col md:justify-between md:items-center "}>

                    <div className={'leading-10'}>
                        <h1 className={'font-bold text-3xl'}>{buildingData?.buildingName}</h1>
                        <h1 className={"font-medium ml-1"}>{buildingData?.buildings.length} Buildings</h1>
                    </div>

                    { userCheckIn && <AddBuildingModal /> }
                </div>
                <div className={"flex flex-wrap gap-5"}>
                    {
                        buildingData?.buildings.map((building) => (
                            <BuildingListCard userID={userID} key={building.id} building={building} userCheckIn={userCheckIn} />
                        ))
                    }
                </div>
            </div>
        </div>
    )


}

export default BuildingDashBoard;