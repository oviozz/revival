
import {FaClipboard} from "react-icons/fa6";
import {LuBuilding2} from "react-icons/lu";
import React from "react";
import { Card } from 'flowbite-react';
import {Link} from "react-router-dom";


const SurveyCard = () => {

    return (
        <Link to={"/a/a"} className={'border-2 px-5 py-3 pb-5 rounded-md'}>
            <div className={"w-full"}>

                <div className={"flex flex-col lg:flex-row justify-between"}>

                    <div className={""}>
                        <div className={"flex items-center gap-2"}>
                            <FaClipboard />
                            <h1 className={'font-bold text-xl'}>South Austin Survey</h1>
                        </div>


                        <div className="flex items-center gap-1 text-gray-500 lg:mb-0 mb-2">
                            <h1 className="">Survey</h1>
                            <span className="border-r border-gray-300 h-4 mx-2"></span>
                            <h1 className="">Last Updated: Oct 30, 2023</h1>
                        </div>
                    </div>

                    <div className={"flex items-center gap-1"}>
                        <LuBuilding2 />
                        <h1 className={"font-semibold"}>17 Buildings</h1>
                    </div>

                </div>

            </div>


            <div className={"flex flex-wrap gap-4 overflow mt-4"}>
                <img className={"lg:w-[17rem] w-full object-cover h-48 rounded"} src={"https://www.flowbite-react.com/images/blog/image-4.jpg"} />
                <img className={"lg:w-[17rem] w-full object-cover h-48 rounded"} src={"https://www.flowbite-react.com/images/blog/image-4.jpg"} />
                <img className={"lg:w-[17rem] w-full object-cover h-48 rounded"} src={"https://www.flowbite-react.com/images/blog/image-4.jpg"} />
                <img className={"lg:w-[17rem] w-full object-cover h-48 rounded"} src={"https://www.flowbite-react.com/images/blog/image-4.jpg"} />
                <img className={"lg:w-[17rem] w-full object-cover h-48 rounded"} src={"https://www.flowbite-react.com/images/blog/image-4.jpg"} />
            </div>


        </Link>
    )



}


export default SurveyCard;