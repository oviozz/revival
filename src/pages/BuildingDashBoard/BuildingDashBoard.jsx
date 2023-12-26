


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
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[22rem] w-full bg-white border-gray-200 rounded-lg border-2">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                        </a>

                        <div className="p-5">

                            <div href="#" className={'mb-2 leading-7'}>
                                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    The Sierra Center
                                </h5>

                                <p>
                                    <span className={"font-semibold"}>5,227 </span>
                                    sqft lot</p>
                            </div>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                14029 West William Cannon Drive Austin, Texas 78735
                            </p>

                            <div className={"flex"}>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.85rem] text-sm font-medium text-center text-white bg-gray-700 rounded-lg rounded-r-none">
                                    <BsBuildingFillGear color={'white'} size={20}/>
                                    Edit building
                                </a>

                                <a href="#" className="flex gap-2 w-full items-center px-3 py-2 lg:text-[0.84rem] text-[0.83rem] font-medium text-center text-white bg-red-500 rounded-lg rounded-l-none">
                                    <FaBuildingCircleXmark color={'white'} size={20}/>
                                    Delete building
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    )


}

export default BuildingDashBoard;