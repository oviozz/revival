
import {createContext, useContext, useEffect, useState} from "react";
import {ProjectsProvider} from "./useProjectsContext.jsx";
import {useParams} from "react-router-dom";
import {useAuth} from "../auth/AuthContext.jsx";
import {deleteData} from "../utils/GlobalUtil/deleteData.jsx";
import {updateData} from "../utils/GlobalUtil/updateData.jsx";
import {addData} from "../utils/GlobalUtil/addData.jsx";


const SurveysContext = createContext();


export const useSurveysContext = () => {
    return useContext(SurveysContext);
};


export const SurveysProvider = ({children}) => {

    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const { projectID } = useParams();
    const [userSurveys, setUserSurveys] = useState([]);

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    const showSuccessAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    useEffect(() => {
        const fetchUserProjects = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://propertyestate.vercel.app/getProjectSurveys?project_id=${projectID}`
                );

                const data = await response.json();

                if (data.error) {
                    console.log(data.error);
                }

                console.log(data["surveys"])

                setUserSurveys(data["surveys"]);

            } catch (error) {
                setError("No user data found");
            } finally {
                setLoading(false);
            }
        };
        fetchUserProjects();
    }, [projectID]);

    const addSurvey = async (newProject) => {

        try {
            const addProject = { ...newProject, userID: userID };
            setUserSurveys((prevProject) => [...prevProject, addProject]);

            const params = {
                user_id: userID,
                project_id: projectID
            }

            await addData('createSurvey', params, newProject, 'survey_id');


            showSuccessAlert('Project has been successfully added!');
        } catch (error) {
            console.log("Error Adding Project", error);
        }
    };

    const updateSurvey = async (surveyID, updatedData) => {

        try {
            setUserSurveys((prevSurvey) =>
                prevSurvey.map((survey) =>
                    survey._id === surveyID ? { ...survey, ...updatedData } : survey
                )
            );

            const params = {
                survey_id: surveyID,
            }

            await updateData('updateSurvey', params , updatedData);

            showSuccessAlert('Project has been successfully updated!');

        } catch (error) {
            console.error("Error updating project:", error);
        }
    };

    const deleteSurvey = async (surveyID) => {
        try {
            setUserSurveys((prevSurvey) =>
                prevSurvey.filter((survey) => survey._id !== surveyID)
            );

            const params = {
                user_id: userID,
                project_id: projectID,
                survey_id: surveyID
            }

            await deleteData('deleteProject', params);

            showSuccessAlert('Project has been successfully deleted!');
        } catch (error) {
            console.error("Error deleting project:", error);
        }
    };


    const contextValue = {
        userSurveys,
        loading,
        addSurvey,
        updateSurvey,
        deleteSurvey
    }


    return (
        <SurveysContext.Provider value={contextValue}>
            {children}
        </SurveysContext.Provider>
    )

}
