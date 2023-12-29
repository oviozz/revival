
import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import {BsBuildingFillAdd} from "react-icons/bs";
import {Button} from "flowbite-react";
import React from "react";
import { FaClipboard } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import SurveyCard from "./SurveyCard.jsx";
import CreateSurveyModal from "./CreateSurveyModal.jsx";


const SurveyDashBoard = () => {

    return (
        <div className={''}>

            <div className={"flex flex-col gap-5"}>
                <Breadcrumbs />

                <div className={"flex lg:flex-row flex-col lg:justify-between lg:items-center "}>

                    <div className={'leading-10'}>
                        <h1 className={'font-bold text-3xl'}>Texas Office Project</h1>
                        <h1 className={"font-medium ml-1"}>1 Survey, 1 Tour</h1>
                    </div>

                    <CreateSurveyModal />
                </div>

                <SurveyCard />

            </div>

        </div>
    )


}

export default SurveyDashBoard;