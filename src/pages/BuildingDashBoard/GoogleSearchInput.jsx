
import React, { useState, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleSearchInput({ setFullAddress, inputError }) {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [placeDetail, setPlaceDetail] = useState();

    const timeoutRef = useRef();
    const sessionTokenRef = useRef();

    const loadSuggestions = async (inputValue) => {
        clearTimeout(timeoutRef.current);

        if (!inputValue || inputValue.trim().length <= 3) {
            setSuggestions([]);
            return;
        }

        timeoutRef.current = setTimeout(async () => {
            const places = await getGoogleMapsPlacesApiClient();
            if (!sessionTokenRef.current) {
                sessionTokenRef.current = new places.AutocompleteSessionToken();
            }

            new places.AutocompleteService().getPlacePredictions(
                {
                    input: inputValue,
                    sessionToken: sessionTokenRef.current,
                },
                (predictions, status) => {
                    if (status === places.PlacesServiceStatus.ZERO_RESULTS) {
                        setSuggestions([]);
                        return;
                    }
                    if (status !== places.PlacesServiceStatus.OK || !predictions) {
                        return;
                    }
                    setSuggestions(predictions);
                },
            );
        }, 350);
    };

    const handleSuggestionSelected = async (suggestion) => {
        setValue(suggestion.description);
        setSuggestions([]);

        const places = await getGoogleMapsPlacesApiClient();

        const sessionToken = sessionTokenRef.current;
        sessionTokenRef.current = undefined;

        new places.PlacesService(document.getElementById("googlemaps-attribution-container")).getDetails(
            {
                placeId: suggestion.place_id,
                fields: ["formatted_address", "name", "geometry.location", "place_id"],
                sessionToken,
            },
            (place, status) => {
                if (status === places.PlacesServiceStatus.OK) {
                    setFullAddress(place?.formatted_address);
                } else {
                    console.error('Error fetching place details');
                }
            }
        );
    };

    const getGoogleMapsPlacesApiClient = async () => {
        const loader = new Loader({
            apiKey: "YOUR_API_KEY",
            version: 'weekly',
        });

        const placesApiClient = await loader.importLibrary('places');
        return placesApiClient;
    };

    return (
        <div className="relative">
            {inputError && <span className="text-sm text-red-500">Invalid Address</span>}
            <input
                placeholder="Type your address"
                className={`${inputError ? "border-2 border-red-500" : null} lg:w-80`}
                type="text"
                value={value}
                onChange={(event) => {
                    const newValue = event.target.value;
                    setValue(newValue);
                    setPlaceDetail(undefined);
                    loadSuggestions(newValue);
                }}
            />
            {suggestions.length > 0 && (
                <ul className="absolute bg-white w-full border border-gray-300 rounded-b mt-1 z-10">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => handleSuggestionSelected(suggestion)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        >
                            {suggestion.description}
                        </li>
                    ))}
                </ul>
            )}
            <div id="googlemaps-attribution-container"></div>
        </div>
    );
}
