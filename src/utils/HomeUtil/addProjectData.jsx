
export const addProjectData = async (data, userID) => {

    try {
        const response = await fetch(`https://propertyestate.vercel.app/createProject?user_id=${userID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        return responseData["project_id"]

    } catch (error){
        console.error('Error creating user data:', error);
        throw error;
    }
}
