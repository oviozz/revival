


import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import AddBuildingModal from "./AddBuildingModal.jsx";
import React from "react";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaBuildingCircleXmark } from "react-icons/fa6";
import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import BuildingCardSkeleton from "./BuildingCardSkeleton.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import {useBuildingChoose} from "../../hooks/useBuildingChoose.jsx";


const BuildingDashBoard = () => {

    const { surveyID } = useParams();
    const { fetchBuildingData } = useBuildingChoose();
    const navigate = useNavigate();

    const { isPending, error, data: buildingData } = useQuery({
        queryKey: ['buildingData', {surveyID}],
        queryFn: () =>
                fetch(`https://propertyestate.vercel.app/getBuilding?building_id=${surveyID}`).then((res) =>
                res.json(),
            ),
    })

    if (isPending){
        return (
            <Loader loadingState={isPending} />
        )
    }

    const chooseBuildingData = async (id) => {
        // await fetchBuildingData(id, {test: ""})
        // navigate("/home/detail");
    }

    return (
        <div className={''}>

            <div className={"flex flex-col gap-5"}>
                <div className={"lg:block hidden"}>
                    <Breadcrumbs />
                </div>

                <div className={"flex lg:flex-row lg:justify-between lg:items-center md:flex-row flex-col md:justify-between md:items-center "}>

                    <div className={'leading-10'}>
                        <h1 className={'font-bold text-3xl'}>{buildingData?.buildingName}</h1>
                        <h1 className={"font-medium ml-1"}>{buildingData?.buildings.length} Buildings</h1>
                    </div>

                    <AddBuildingModal />
                </div>

                <div className={"flex flex-wrap gap-5"}>
                    {
                        buildingData?.buildings.map((building) => (
                            <div onClick={async () => {await chooseBuildingData(building._id)}} key={building._id} className="hover:bg-gray-100 hover:cursor-pointer lg:max-w-[17rem] w-full bg-white border-gray-200 rounded-lg border-2">
                                <img className="rounded-t-lg w-full h-48" src={building.image_links[0]} alt={building.image_links[0]}/>


                                <div className="p-5">

                                    <div href="#" className={'mb-2 leading-7'}>
                                        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                                            The Sierra Center
                                        </h5>

                                        {
                                            building?.property_facts && (
                                                <p>
                                                    <span className={"font-semibold"}>{building?.property_facts["Building Size"]}</span>
                                                    {/*sqft lot*/}
                                                </p>
                                            )
                                        }
                                    </div>

                                    <a href={`https://www.google.com/maps/place/${building.address}`} target={"_blank"} className=" hover:underline mb-3 font-normal text-gray-700 dark:text-gray-400" rel="noreferrer">
                                        {building.address}
                                    </a>


                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>







        </div>
    )


}

export default BuildingDashBoard;