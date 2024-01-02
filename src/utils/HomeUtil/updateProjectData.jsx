
export const updateProjectData = async (projectID, updateData) => {
    try {
        const response = await fetch(`https://propertyestate.vercel.app/updateProject?project_id=${projectID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Project updated successfully:', data);

        } else {
            console.error('Error updating project:', data.error);
        }
    } catch (error) {
        console.error('Error updating project:', error);
    }
};
