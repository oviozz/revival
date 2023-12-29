
import Button from "../../components/CompAssests/Button.jsx";
import CreateProjectModal from "./CreateProjectModal.jsx";
import DashBoardCard from "./DashBoardCard.jsx";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthContext.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import {createUserData} from "../../utils/createUserData.jsx";
import ProjectLoader from "../../components/CompAssests/ProjectLoader.jsx";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";
import {useUserProjectsContext} from "../../hooks/useUserProjectsContext.jsx";
import AlertBar from "../../components/CompAssests/AlertBar.jsx";

function HomeDashBoard(){

    const { userProjects, loading, alertOpen, setAlertOpen, alertMessage } = useUserProjectsContext();

    console.log(userProjects)
    return (

        <div className={""}>

            <div className={"flex justify-between items-center"}>
                <h1 className={"text-lg font-semibold"}>{userProjects?.length} Projects</h1>
                <CreateProjectModal />
            </div>

            {
                loading ?
                    <ProjectLoader loadingState={loading} />
                    :
                    !loading && userProjects?.length > 0 ? (
                        <ul className={"flex gap-7 mt-5 flex-wrap"}>
                            {userProjects.map((projectItem, index) => (
                                <li key={index} className={"lg:w-fit w-full"}>
                                    <DashBoardCard project={projectItem}/>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <EmptyState />
                    )
            }

            <AlertBar alertOpen={alertOpen} setAlertOpen={setAlertOpen} message={alertMessage}/>
        </div>
    )

}

export default HomeDashBoard;