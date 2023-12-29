
export const GenerateObjectID = () => {

    const chars = "0123456789abcdef";
    let objectId = "";

    for (let i = 0; i < 24; i++) {
        objectId += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return objectId;
};
