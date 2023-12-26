
import Button from "../../components/CompAssests/Button.jsx";
import CreateProjectModal from "./CreateProjectModal.jsx";
import DashBoardCard from "./DashBoardCard.jsx";
import {useState} from "react";


function HomeDashBoard(){

    const [projectData, setProjectData] = useState([
        {
            projectName: 'Texas Office Project',
            clientName: 'Innovate Enterprises',
            extraInfo: ['3200 sqft', '$20.00 psf'],
        },
        {
            projectName: 'City Center Renovation',
            clientName: 'Urban Development Corp',
            extraInfo: ['5000 sqft', '$25.00 psf'],
        },
    ]);

    const addProject = (newProject) => {
        setProjectData([...projectData, newProject]);
    };


    return (

        <div className={""}>

            <div className={"flex justify-between items-center"}>
                <h1 className={"text-lg font-semibold"}>{projectData.length} Projects</h1>
                <CreateProjectModal onProjectCreate={addProject}/>
            </div>

            <ul className={"flex gap-7 mt-5 flex-wrap"}>
                {
                    projectData.map((projectItem, index) => (
                        <li key={index}>
                            <DashBoardCard project={projectItem}/>
                        </li>
                    ))
                }
            </ul>


        </div>
    )

}

export default HomeDashBoard;