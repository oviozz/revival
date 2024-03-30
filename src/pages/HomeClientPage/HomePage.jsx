
import React, {useEffect, useState} from "react";
import BuildingCardClient from "./BuildingCardClient.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";


export default function HomePage(){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [buildingData, setBuildingData] = useState([]);
    const currentPage = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const fullAddress = '42115 Edgewood Fremont CA 94538'; // replace with actual address string
                // const { city, state, zipcode } = parseAddress(fullAddress);
                setLoading(true)
                const url = `https://socalwarehousesapi.vercel.app/getcombineddata?zipcode=91303&city=CanogaPark&state=CA&page=1`;
                const response = await fetch(url);
                const result = await response.json();

                if (response.status === 500) {
                    setError(true)
                }

                if (result.propertyData.length > 0) {
                    setBuildingData(result.propertyData);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]); // re-run the effect when currentPage changes

    if (loading) {
        return <Loader loadingState={loading} /> ;
    }

    return (
        <div>
            <ul className={"flex flex-wrap gap-5 justify-center"}>
                {buildingData.map((property, index) => (
                    <BuildingCardClient
                        key={property.ID}
                        building={property}
                    />
                ))}
            </ul>
        </div>
    );

}