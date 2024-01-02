
import Breadcrumbs from "../../components/CompAssests/BreadCrumbs.jsx";
import {BsBuildingFillAdd} from "react-icons/bs";
import {Button} from "flowbite-react";
import React from "react";
import { FaClipboard } from "react-icons/fa6";
import { LuBuilding2 } from "react-icons/lu";
import SurveyCard from "./SurveyCard.jsx";
import CreateSurveyModal from "./CreateSurveyModal.jsx";
import {useSurveysContext} from "../../hooks/useSurveysContext.jsx";
import ProjectLoader, {NoSurveyCard} from "../../components/CompAssests/ProjectLoader.jsx";
import DashBoardCard from "../HomeDashBoard/DashBoardCard.jsx";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";


const SurveyDashBoard = () => {

    const { userSurveys, loading } = useSurveysContext();

    const hasContent = userSurveys?.length > 0;

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