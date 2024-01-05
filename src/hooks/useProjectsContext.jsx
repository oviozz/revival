
import { createContext, useContext, useEffect, useState } from "react";
import {useAuth} from "../auth/AuthContext.jsx";
import {deleteData} from "../utils/GlobalUtil/deleteData.jsx";
import {updateData} from "../utils/GlobalUtil/updateData.jsx";
import {addData} from "../utils/GlobalUtil/addData.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

const ProjectsContext = createContext();

export const useProjectsContext = () => {
    return useContext(ProjectsContext);
};

const fetchUserProjects = async (userID) => {
    const response = await fetch(
        `https://propertyestate.vercel.app/getUserProjects?user_id=${userID}`
    );
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return data.projects;
};



export const ProjectsProvider = ({ children }) => {

    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const queryClient = useQueryClient();

    const { data: userProjects = [], isLoading: loading, isError: error } = useQuery({
        queryKey: ['projects', { userID }],
        queryFn: () => fetchUserProjects(userID),
        enabled: !!userID
    })

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');


    const showSuccessAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const addProject = async (newProject) => {
        const addProject = { ...newProject, userID: userID }
        return addData('createProject', {user_id: userID}, addProject, 'project_id');
    };

    const { mutateAsync: addProjectMutation } = useMutation({
        mutationFn: addProject,
        onSuccess: () => {
            showSuccessAlert("Project has been successfully added!");
        },

        onMutate: (newProject) => {
            queryClient.setQueryData(['projects', { userID }], (prevProjects) => [...prevProjects, newProject]);
        }

    })

    const deleteProject = async (projectID) => {

        const params = {
            project_id: projectID,
            user_id: userID
        }

        return deleteData('deleteProject', params);
    };

    const { mutateAsync: deleteProjectMutation } = useMutation({
        mutationFn: deleteProject,
        onSuccess: (data, variables) => {
            showSuccessAlert("Project has been successfully deleted!");
        },
        onMutate: (variables) => {
            queryClient.setQueryData(['projects', { userID }], (prevProjects) =>
                prevProjects.filter((project) => project._id !== variables)
            );
        }
    })

    const updateProject = async (updatedProjectData) => {

        const params = {
            project_id: updatedProjectData._id,
        }

        return updateData('updateProject', params , updatedProjectData);

    };

    const { mutateAsync: updateProjectMutation } = useMutation({
        mutationFn: updateProject,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["projects", {userID}]});
            showSuccessAlert("Project has been successfully updated!");
        },
        onMutate: (updatedProjectData) => {
            const previousProjects = queryClient.getQueryData(['projects', { userID }]);
            const updatedProjects = previousProjects.map((project) =>
                project._id === updatedProjectData._id ? updatedProjectData : project
            );
            queryClient.setQueryData(['projects', { userID }], updatedProjects);
            return { previousProjects };
        },
        onError: (err, updatedProjectData, context) => {
            queryClient.setQueryData(['projects', { userID }], context.previousProjects);
        }
    })

    const contextValue = {
        userProjects,
        error,
        loading,
        alertOpen,
        setAlertOpen,
        alertMessage,
        addProject: addProjectMutation,
        deleteProject: deleteProjectMutation,
        updateProject: updateProjectMutation
    };

    return (
        <ProjectsContext.Provider value={contextValue}>
            {children}
        </ProjectsContext.Provider>
    );
};
