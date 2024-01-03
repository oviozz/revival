
import { createContext, useContext, useEffect, useState } from "react";
import {useAuth} from "../auth/AuthContext.jsx";
import {deleteData} from "../utils/GlobalUtil/deleteData.jsx";
import {updateData} from "../utils/GlobalUtil/updateData.jsx";
import {addData} from "../utils/GlobalUtil/addData.jsx";

const ProjectsContext = createContext();

export const useProjectsContext = () => {
    return useContext(ProjectsContext);
};

export const ProjectsProvider = ({ children }) => {

    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const [userProjects, setUserProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const showSuccessAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const addProject = async (newProject) => {
        try {
            const addProject = { ...newProject, userID: userID };
            setUserProjects((prevProject) => [...prevProject, addProject]);

            const params = {
                user_id: userID
            }

            await addData('createProject', params, newProject, 'project_id');

            showSuccessAlert('Project has been successfully added!');
        } catch (error) {
            console.log("Error Adding Project", error);
        }
    };

    const deleteProject = async (projectID) => {
        try {
            setUserProjects((prevProjects) =>
                prevProjects.filter((project) => project._id !== projectID)
            );

            const params = {
                project_id: projectID,
                user_id: userID
            }

            await deleteData('deleteProject', params);

            showSuccessAlert('Project has been successfully deleted!');
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };

    const updateProject = async (projectID, updatedData) => {

        try {
            setUserProjects((prevProjects) =>
                prevProjects.map((project) =>
                    project._id === projectID ? { ...project, ...updatedData } : project
                )
            );

            const params = {
                project_id: projectID,
            }

            await updateData('updateProject', params , updatedData);

            showSuccessAlert('Project has been successfully updated!');

        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    useEffect(() => {
        const fetchUserProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://propertyestate.vercel.app/getUserProjects?user_id=${userID}`
                );

                const data = await response.json();

                if (data.error) {
                    console.log(data.error);
                }

                setUserProjects(data["projects"]);
            } catch (error) {
                setError("No user data found");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProjects();
    }, [userID]);

    const contextValue = {
        userProjects,
        error,
        loading,
        alertOpen,
        setAlertOpen,
        alertMessage,
        addProject,
        deleteProject,
        updateProject,
    };

    return (
        <ProjectsContext.Provider value={contextValue}>
            {children}
        </ProjectsContext.Provider>
    );
};
