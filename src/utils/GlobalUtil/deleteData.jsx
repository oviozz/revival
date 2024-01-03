

export const deleteData = async (pathType, params) => {

    const url = new URL(`https://propertyestate.vercel.app/${pathType}`);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
    }catch (error){
        console.error('Error deleting item:', error);
    }
}

