
const parseAddress = (fullAddress) => {
    // Updated regex to make zipcode optional
    const addressRegex = /(\d+)\s+([^\d,]+),\s*([^\d,]+),\s*([A-Za-z]{2})\s*(\d{5})?/;
    const match = fullAddress.match(addressRegex);

    if (match) {
        const [, streetNumber, streetName, city, state, zipcode] = match;

        console.log(streetNumber)
        // Check if zipcode is undefined and set it to an empty string
        const normalizedZipcode = typeof zipcode !== 'undefined' ? zipcode : '';

        return {
            streetNumber,
            streetName,
            city,
            state,
            zipcode: normalizedZipcode,
            error: false,
        };
    } else {
        return {
            error: true
        }
    }
};

export default parseAddress;
