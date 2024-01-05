
import {createContext, useContext, useEffect, useState} from "react";
import {ProjectsProvider} from "./useProjectsContext.jsx";
import {useParams} from "react-router-dom";
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

const fetchProjectSurvey = async (projectID) => {
    const response = await fetch(
        `https://propertyestate.vercel.app/getProjectSurveys?project_id=${projectID}`
    );
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return data.surveys;
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
        queryFn: () => fetchProjectSurvey(projectID),
        enabled: !!projectID
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
            queryClient.setQueryData(['surveys',projectID, { userID }], (prevSurveys) => [...prevSurveys, newSurvey]);
        }

    })

    const updateSurvey = async ({surveyID, updatedData}) => {
        console.log(updatedData)
        return updateData('updateSurvey', {survey_id: surveyID} , updatedData);

    };

    const { mutateAsync: updateSurveyMutation } = useMutation({
        mutationFn: updateSurvey,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["surveys", projectID, {userID}]});
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
            showSuccessAlert("Project has been successfully updated!");
        },
        onMutate: (variables) => {
            queryClient.setQueryData(['surveys',projectID, { userID }], (prevSurveys) =>
                prevSurveys.filter((survey) => survey._id !== variables)
            );
        }

    })


    const contextValue = {
        userSurveys,
        loading,
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
