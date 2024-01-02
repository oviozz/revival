
import Button from "../../components/CompAssests/Button.jsx";
import CreateProjectModal from "./CreateProjectModal.jsx";
import DashBoardCard from "./DashBoardCard.jsx";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthContext.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import ProjectLoader from "../../components/CompAssests/ProjectLoader.jsx";
import EmptyState from "../../components/CompAssests/EmptyState.jsx";
import {useProjectsContext} from "../../hooks/useProjectsContext.jsx";
import AlertBar from "../../components/CompAssests/AlertBar.jsx";

function HomeDashBoard(){

    const { userProjects, loading, alertOpen, setAlertOpen, alertMessage } = useProjectsContext();

    const hasContent = userProjects?.length > 0;

    return (

        <div className={""}>

            <div className={`flex justify-${ !hasContent ? 'end' : 'between'} items-center`}>
                {hasContent && <h1 className={"text-lg font-semibold"}>{userProjects?.length} Projects</h1>}
                <CreateProjectModal projectLoad={loading}/>
            </div>

            {
                loading ?
                    <ProjectLoader loadingState={loading} loaderType={'project'} count={7} />
                    :
                    !loading && hasContent ? (
                        <ul className={"flex gap-7 mt-5 flex-wrap"}>
                            {userProjects.map((projectItem, index) => (
                                <li key={index} className={"lg:w-fit w-full"}>
                                    <DashBoardCard project={projectItem}/>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <EmptyState title={"Projects"} style={'mt-32'}/>
                    )
            }

            <AlertBar alertOpen={alertOpen} setAlertOpen={setAlertOpen} message={alertMessage}/>
        </div>
    )

}

export default HomeDashBoard;