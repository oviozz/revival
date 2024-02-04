
import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import {BsBuildingFillAdd} from "react-icons/bs";
import {Button} from "flowbite-react";
import React, {useEffect} from "react";
import { FaClipboard } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import SurveyCard from "./SurveyCard.jsx";
import CreateSurveyModal from "./CreateSurveyModal.jsx";
import {useSurveysContext} from "../../hooks/useSurveysContext.jsx";
import ProjectLoader, {NoSurveyCard} from "../../components/CompAssests/ProjectLoader.jsx";
import DashBoardCard from "../HomeDashBoard/DashBoardCard.jsx";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";
import {Link} from "react-router-dom";
import { FaExclamationCircle } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const SurveyDashBoard = () => {

    const { userSurveys, projectName, loading, error,  } = useSurveysContext();
    const hasContent = userSurveys?.length > 0;


    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-[calc(100vh-150px)] gap-3">
                <FaExclamationCircle className="text-gray-300 text-5xl" />
                <h1 className="text-3xl text-center font-semibold text-gray-300">No Project Found.</h1>
                <Link to="/">
                    <button className="flex items-center bg-gray-200 font-semibold text-gray-400 px-4 py-2 rounded-md text-xl">
                        Go home  <MdOutlineKeyboardArrowRight size={30} />
                    </button>
                </Link>
            </div>
        );
    }


    return (
        <div className={''}>

            <div className={"flex flex-col gap-5"}>
                <Breadcrumbs />

                <div className={"flex lg:flex-row flex-col lg:justify-between lg:items-center "}>

                    <div className={'leading-10'}>
                        <h1 className={'font-bold text-3xl'}>{projectName}</h1>
                        <h1 className={"font-medium ml-1"}>{userSurveys?.length } Survey</h1>
                    </div>

                    <CreateSurveyModal />
                </div>


                {
                    loading ?
                        <ProjectLoader loadingState={loading} loaderType={'survey'} count={2}/>
                        :
                        !loading && hasContent ? (
                            <ul className={"flex flex-col gap-7 mt-5"}>
                                {userSurveys.map((surveyItem, index) => (
                                    <SurveyCard key={index} survey={surveyItem}/>
                                ))}
                            </ul>
                        ) : (
                            <EmptyState title={"Surveys"} style={'mt-32'}/>
                        )
                }
            </div>

        </div>
    )


}

export default SurveyDashBoard;