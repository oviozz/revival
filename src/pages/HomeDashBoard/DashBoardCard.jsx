
import { Card } from 'flowbite-react';
import {Link} from "react-router-dom";
import ProjectToolMenu from "./ProjectToolMenu.jsx";

function DashBoardCard({project}){

    const {projectName, clientName, extraInfo, lastUpdated, _id} = project;

    const handleToolMenuClick = (e) => {
        e.preventDefault();
    };

    return (
        <Link to={`/${_id}?projectName=${encodeURIComponent(projectName)}`}>
            <Card className="hover:bg-gray-100 relative lg:min-w-[470px] lg:max-w-[470px] min-h-[175px] shadow-none border-2 md:w-full">

                <div className={"absolute top-0 right-0"} onClick={handleToolMenuClick}>
                    <ProjectToolMenu project={project}/>
                </div>

                <h1 className={"font-medium lg:text-sm text-xs absolute bottom-0.5 right-1.5 text-gray-400 flex gap-1"}>
                    Last Updated:
                    <span className={"font-light"}>{lastUpdated}</span>
                </h1>

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {projectName}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {clientName}
                </p>

                <ul className={"flex gap-5 "}>
                    {
                        extraInfo?.map((item, index) => (
                            <li className={"bg-teal-700 text-white text-sm p-2 rounded-md"} key={index}>{item}</li>
                        ))
                    }
                </ul>
            </Card>
        </Link>
    )
}

export default DashBoardCard;