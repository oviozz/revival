

export const updateData = async (pathType, params, updateData) => {
    try {

        const url = new URL(`https://propertyestate.vercel.app/${pathType}`);

        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });

        const data = await response.json();

    } catch (error) {
        console.error('Error updating project:', error);
    }
};
