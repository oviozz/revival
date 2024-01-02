
export const storeUserDB = async (user, userInfo) => {

    const response = await fetch('https://propertyestate.vercel.app/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            _id: user.uid,
            photoURL: user.photoURL,
            username: userInfo.username || user.displayName,
            email: userInfo.email || user.email,
            projects: [],
            surveys: [],
            buildings: []
        }),
    });
}

