
import React from "react";
import BuildingDetailPage from "../BuildingDashBoard/BuildingDetailPage.jsx";
import Loader from "../../components/CompAssests/Loader.jsx";
import {Carousel} from "flowbite-react";
import {FaBuildingCircleArrowRight} from "react-icons/fa6";
import {useBuildingChoose} from "../../hooks/useBuildingChoose.jsx";

export default function HomeDetailPage() {

    const { loading, data, error, cardChosenData, saveBuildingtoDB } = useBuildingChoose();

    if (loading) {
        return <Loader loadingState={loading} /> ;
    }

    if (!data) {
        return <h1>Error loading data</h1>;
    }

    const { buildingDetail } = data;
    const parsedCardChosenData = JSON.parse(cardChosenData);

    return (
        <div className="relative container mx-auto ">

            <div className="container ">

                <section className="mb-8 bg-white rounded-lg">
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel slideInterval={5000}>
                            {buildingDetail.image_links.map((link, index) => (
                                <img key={index} src={link} alt={`Image ${index + 1}`} className="rounded-md" />
                            ))}
                        </Carousel>

                    </div>
                </section>

                <div className={"lg:flex justify-between items-start"}>

                    <div className={""}>
                        <section className="mb-4 bg-white rounded-lg">
                            <h2 className="text-4xl font-medium ">{parsedCardChosenData?.Title} {parsedCardChosenData?.Address}</h2>
                        </section>

                        <section className="mb-8 bg-white rounded-lg">
                            <h2 className="text-4xl font-bold mb-6">
                                {parsedCardChosenData?.Price}
                            </h2>
                        </section>
                    </div>

                </div>

                <section className="mb-8  bg-white rounded-lg">
                    <h2 className="text-2xl text-gray-700  font-semibold mb-6 ">Property Facts</h2>
                    <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-800">
                        {Object.entries(buildingDetail.property_facts)?.map(([key, value]) => (
                            <div key={key} className="mb-4 ">
                                <dt className="font-semibold text-lg">{key}</dt>
                                <dd className="text-lg">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="mb-8 bg-white rounded-lg mt-5">
                    <h2 className="text-2xl text-gray-700 font-semibold mb-6">Building Highlights</h2>
                    {buildingDetail.highlights?.map((highlight, index) => (
                        <ul key={index} className="list-disc list-inside text-gray-800">
                            {highlight.map((item, i) => (
                                <li key={i} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    ))}
                </section>


                {/* Building Highlights */}

                {/* Property Facts */}

                <section className="mb-8 bg-white rounded-lg">
                    <h2 className="text-2xl text-gray-700  font-semibold mb-6">Summary</h2>
                    <p className="text-gray-800 text-lg">{buildingDetail.summary}</p>
                </section>

                {/* Virtual Tour Links */}
                <section className=" bg-white rounded-lg">
                    <h2 className="text-2xl text-gray-700  font-semibold mb-6">Virtual Tour Links</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {buildingDetail.property_facts["Virtual Tour Links"]?.map((tourLink, index) => (
                            <iframe key={index} title={`Virtual Tour ${index + 1}`} src={tourLink} className="w-full h-64 rounded-md" />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
