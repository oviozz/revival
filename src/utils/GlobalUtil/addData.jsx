
export const addData = async (pathType, params, data, returnID) => {

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
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        return responseData[returnID]

    } catch (error){
        console.error('Error creating user data:', error);
        throw error;
    }
}
