
import {createContext, useContext, useEffect, useState} from "react";
import {ProjectsProvider} from "./useProjectsContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "../auth/AuthContext.jsx";
import {deleteData} from "../utils/GlobalUtil/deleteData.jsx";
import {updateData} from "../utils/GlobalUtil/updateData.jsx";
import {addData} from "../utils/GlobalUtil/addData.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {data} from "autoprefixer";


const SurveysContext = createContext();


export const useSurveysContext = () => {
    return useContext(SurveysContext);
};

const fetchProjectSurvey = async (projectID, userID) => {

    const response = await fetch(
        `https://propertyestate.vercel.app/getProjectSurveys?project_id=${projectID}&user_id=${userID}`
    );

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return {
        projectName: data.projectName,
        surveys: data.surveys,
    };
};

export const SurveysProvider = ({children}) => {

    const { userInfo } = useAuth();
    const userID = userInfo.uid;

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const showSuccessAlert = (message) => {
        setAlertMessage(message);
        setAlertOpen(true);
    };

    const { projectID } = useParams();
    const queryClient = useQueryClient();

    const { data: userSurveys = [], isLoading: loading, isError: error } = useQuery({
        queryKey: ['surveys', projectID, { userID }],
        queryFn: () => fetchProjectSurvey(projectID, userID),
        enabled: !!projectID,
        retry: false
    })

    const addSurvey = async (newSurvey) => {
        const params = {
            user_id: userID,
            project_id: projectID
        }
        return addData('createSurvey', params, newSurvey, 'survey_id');
    };

    const { mutateAsync: addSurveyMutation } = useMutation({
        mutationFn: addSurvey,
        onSuccess: () => {
            showSuccessAlert("Survey has been successfully added!");
        },

        onMutate: (newSurvey) => {

            const snapshot = queryClient.getQueryData(['surveys', projectID, { userID }]);

            queryClient.setQueryData(['surveys', projectID, { userID }], (userSurveys) => ({
                ...userSurveys,
                surveys: [...userSurveys.surveys, newSurvey],
            }));

            return snapshot;
        },

        onError: (error, snapshot) => {

            console.log(`Error: ${error.message}`);
            console.log('Snapshot:', JSON.stringify(snapshot, null, 2));

            queryClient.setQueryData(['surveys', projectID, { userID }], (prevData) => {
                const updatedSurveys = prevData.surveys.map((survey) => {
                    if (survey._id === snapshot._id) {
                        return { ...survey, isError: true };
                    }
                    return survey;
                });

                return { ...prevData, surveys: updatedSurveys };
            });
        }


    })

    const updateSurvey = async ({surveyID, updatedData}) => {
        return updateData('updateSurvey', {survey_id: surveyID} , updatedData);

    };

    const { mutateAsync: updateSurveyMutation } = useMutation({
        mutationFn: updateSurvey,
        onSuccess: () => {
            showSuccessAlert("Project has been successfully updated!");
        },
        onMutate: (variables) => {

            const queryKey = ['surveys', projectID, { userID }];
            queryClient.setQueryData(queryKey, (prevData) => {
                const updatedSurveys = [...prevData.surveys];
                const surveyIndex = updatedSurveys.findIndex((survey) => survey._id === variables.surveyID);
                updatedSurveys[surveyIndex] = { ...updatedSurveys[surveyIndex], ...variables.updatedData };

                return {
                    ...prevData,
                    surveys: updatedSurveys,
                };
            });

            showSuccessAlert("Project has been successfully updated!");
        }
    })

    const deleteSurvey = async (surveyID) => {
        const params = {
            user_id: userID,
            project_id: projectID,
            survey_id: surveyID
        }

        return deleteData('deleteSurvey', params);
    };

    const { mutateAsync: deleteSurveyMutation } = useMutation({
        mutationFn: deleteSurvey,
        onSuccess: () => {
            showSuccessAlert("Project has been successfully deleted!");
        },

        onMutate: (variables) => {
            queryClient.setQueryData(['surveys', projectID, { userID }], (prevData) => ({
                ...prevData,
                projectName: prevData.projectName,
                surveys: prevData.surveys.filter((survey) => survey._id !== variables)
            }));
        }

    })


    const contextValue = {
        projectName: userSurveys.projectName,
        userSurveys: userSurveys.surveys || [],
        loading,
        error,
        addSurvey: addSurveyMutation,
        updateSurvey: updateSurveyMutation,
        deleteSurvey: deleteSurveyMutation
    }


    return (
        <SurveysContext.Provider value={contextValue}>
            {children}
        </SurveysContext.Provider>
    )

}