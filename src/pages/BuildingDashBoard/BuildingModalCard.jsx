
import React from "react";
import { FaMapMarkerAlt, FaDollarSign, FaBuilding, FaLandmark } from "react-icons/fa";
import {useBuildingChoose} from "../../hooks/useBuildingChoose.jsx";

function BuildingModalCard({ building, addBuilding }) {

    const { ID, Address, "Building Info": buildingInfo, "Image URL": imageUrl, Title, Price } = building;
    const { fetchBuildingData } = useBuildingChoose();


    const handleAddBuilding = async () => {

        const buildingData = { ID, Address, Title, Price };


        await addBuilding();
        await fetchBuildingData(ID, buildingData);
    }

    return (
        <div className="lg:max-w-[470px] w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow  ">

            <div className="relative h-48 overflow-hidden">
                <a href="#">
                    <img className="object-center w-full h-full rounded-t-lg" src={imageUrl} alt={Address} />
                </a>
            </div>

            <div className="p-5">
                <div className={""}>
                    <a href="#" className="text-blue-900 hover:underline">
                        <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            {Title} {Address}
                        </h5>
                    </a>

                    <h5 className={"text-2xl font-bold "}>{
                        Price || <span className={"text-gray-400"}>No Price Available</span>
                    }</h5>

                    <hr className={"mt-2 mb-2"}/>

                    <ul className="space-y-2 text-gray-700 dark:text-gray-400 mt-2">
                        {buildingInfo.map((info, index) => (
                            <li key={index} className="flex items-center">
                                {!info.includes("$") && (
                                    <>
                                        {index === 0 && <FaDollarSign className="mr-2" />}
                                        {index === 1 && <FaBuilding className="mr-2" />}
                                        {index === 2 && <FaLandmark className="mr-2" />}

                                        <span className="text-sm">{info}</span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleAddBuilding}
                    className=" w-full inline-flex items-center justify-center px-3 py-2 mt-4 text-sm font-medium text-white bg-[#146CA3] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <span className="mr-2 ">Add Building</span>
                    <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default BuildingModalCard;
