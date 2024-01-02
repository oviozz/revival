
import {FaClipboard} from "react-icons/fa6";
import {LuBuilding2} from "react-icons/lu";
import React from "react";
import { Card } from 'flowbite-react';
import {Link} from "react-router-dom";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";
import { BsBuildingSlash } from "react-icons/bs";



const SurveyCard = ({survey}) => {

    const {_id, surveyName, surveyType, lastUpdated, buildings, buildingImage} = survey;

    return (
        <Link to={"/a/a"} className={'border-2 px-5 py-3 pb-5 rounded-md hover:bg-gray-100'}>
            <div className={"w-full"}>

                <div className={"flex flex-col lg:flex-row justify-between"}>

                    <div className={""}>
                        <div className={"flex items-center gap-2"}>
                            <FaClipboard />
                            <h1 className={'font-bold text-xl'}>{surveyName}</h1>
                        </div>


                        <div className="flex items-center gap-1 text-gray-500 lg:mb-0 mb-2">
                            <h1 className="">{surveyType}</h1>
                            <span className="border-r border-gray-300 h-4 mx-2"></span>
                            <h1 className="">Last Updated: {lastUpdated}</h1>
                        </div>
                    </div>

                    <div className={"flex items-center gap-1"}>
                        <LuBuilding2 />
                        <h1 className={"font-semibold"}>{buildings.length} Buildings</h1>
                    </div>

                </div>

            </div>


            {
                buildingImage.length !== 0 ?
                    (
                        <div className={"flex flex-wrap gap-4 overflow mt-4"}>
                            {buildingImage.map((image, index) => (
                                <img
                                    key={index}
                                    className={"lg:w-[17rem] w-full object-cover h-48 rounded"}
                                    src={image}
                                    alt={`${surveyName} ${index}`}
                                />
                            ))}
                        </div>
                    )
                    :
                    <div className={`flex flex-col justify-center items-center gap-1 lg:mt-0 mt-2`}>
                        <BsBuildingSlash size={30} color={'gray'}/>
                        <h2 className={"text-md text-gray-700 font-semibold"}>No Buildings</h2>
                        <h1 className={"text-gray-500 text-sm"}>Get started by adding a new property.</h1>
                    </div>
            }


        </Link>
    )



}


export default SurveyCard;