

export const deleteUserData = async (projectID, userID) => {

    console.log('working')
    try {
        const response = await fetch(`https://propertyestate.vercel.app/deleteProject?project_id=${projectID}&user_id=${userID}`, {
            method: 'DELETE',
        });
    }catch (error){
        console.error('Error deleting item:', error);
    }
}

