

export const addSurveyData = async (data, projectID, userID) => {

    try {
        const response = await fetch(`https://propertyestate.vercel.app/createSurvey?user_id=${userID}&project_id=${projectID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        return responseData["survey_id"]

    } catch (error){
        console.error('Error creating user data:', error);
        throw error;
    }
}
