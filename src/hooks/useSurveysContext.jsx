
import {createContext, useContext, useEffect, useState} from "react";
import {ProjectsProvider} from "./useProjectsContext.jsx";
import {useParams} from "react-router-dom";
import {addProjectData} from "../utils/HomeUtil/addProjectData.jsx";
import {useAuth} from "../auth/AuthContext.jsx";
import {addSurveyData} from "../utils/SurveyUtil/addSurveyData.jsx";


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
            await addSurveyData(newProject, projectID, userID);

            showSuccessAlert('Project has been successfully added!');
        } catch (error) {
            console.log("Error Adding Project", error);
        }
    };



    const contextValue = {
        userSurveys,
        loading,
        addSurvey
    }


    return (
        <SurveysContext.Provider value={contextValue}>
            {children}
        </SurveysContext.Provider>
    )

}
