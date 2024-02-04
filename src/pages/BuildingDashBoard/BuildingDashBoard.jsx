


import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import AddBuildingModal from "./AddBuildingModal.jsx";
import React from "react";
import { BsBuildingFillGear } from "react-icons/bs";
import { FaBuildingCircleXmark } from "react-icons/fa6";


const BuildingDashBoard = () => {

    return (
        <div className={''}>

            <div className={"flex flex-col gap-5"}>
                <Breadcrumbs />

                <div className={"flex lg:flex-row lg:justify-between lg:items-center md:flex-row flex-col md:justify-between md:items-center "}>

                    <div className={'leading-10'}>
                        <h1 className={'font-bold text-3xl'}>South Austin Survey</h1>
                        <h1 className={"font-medium ml-1"}>10 Buildings</h1>
                    </div>

                    <AddBuildingModal />
                </div>

                <div className={"flex flex-wrap gap-5"}>
                    <div className="lg:max-w-[17rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg"/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>


                        </div>
                    </div>
                </div>



            </div>







        </div>
    )


}

export default BuildingDashBoard;