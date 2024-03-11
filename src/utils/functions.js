
export function countUserIDsContainingString(objects, searchString) {
    let count = 0;
    objects.forEach(obj => {
        if (obj.userID.includes(searchString)) {
            count++;
        }
    });
    return count;
}

export function countTrueObject(objects) {
    let count = 0;
    objects.forEach(obj => {
        if (obj.favorite) {
            count++;
        }
    });
    return count;
}