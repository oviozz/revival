

import React, {useState} from "react";
import { useBuildingChoose } from "../../hooks/useBuildingChoose.jsx";
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "../../components/CompAssests/Button.jsx";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import {Carousel} from "flowbite-react";

export default function BuildingEditConfirmPage({tabFowardAction}) {

    const { loading, data, error, cardChosenData } = useBuildingChoose();
    const [editData, setEditData] = useState(null);


    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return <h1>Error loading data</h1>;
    }

    const { buildingDetail } = data;
    const parsedCardChosenData = JSON.parse(cardChosenData);
    setEditData(parsedCardChosenData);

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
                        <section className="mb-4 bg-white rounded-lg ">
                            <textarea className="text-4xl font-medium w-92" name={"Title"} defaultValue={`${parsedCardChosenData?.Title} ${parsedCardChosenData?.Address}`} />
                        </section>

                        <section className="mb-8 bg-white rounded-lg">
                            <h2 className="text-4xl font-bold mb-6">
                                <input className={"text-3xl border"} defaultValue={parsedCardChosenData?.Price} name={"Price"} />
                            </h2>
                        </section>
                    </div>

                    <button onClick={tabFowardAction} className={"flex gap-2 items-center bg-logoBlue text-white font-semibold text-xl rounded-md p-2 lg:mr-5 hover:bg-logoHover"}>
                        Confirm Building <FaBuildingCircleArrowRight size={20}/>
                    </button>
                </div>

                <section className="mb-8  bg-white rounded-lg">
                    <h2 className="text-2xl text-gray-700  font-semibold mb-6 ">Property Facts</h2>
                    <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-800">
                        {Object.entries(buildingDetail.property_facts)?.map(([key, value]) => (
                            <div key={key} className="mb-4 ">
                                <dt className="font-semibold text-lg">{key}</dt>
                                <input name={key} className="text-lg border" defaultValue={value} />
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="mb-8 bg-white rounded-lg mt-5">
                    <h2 className="text-2xl text-gray-700 font-semibold mb-6">Building Highlights</h2>
                    {buildingDetail.highlights?.map((highlight, index) => (
                        <ul key={index} className="flex flex-col list-disc list-inside text-gray-800">
                            {highlight.map((item, i) => (
                                <input name={i} key={i} className="mb-2 border" defaultValue={item}/>
                            ))}
                        </ul>
                    ))}
                </section>


                {/* Building Highlights */}

                {/* Property Facts */}

                <section className="mb-8 bg-white rounded-lg">
                    <h2 className="text-2xl text-gray-700  font-semibold mb-6">Summary</h2>
                    <textarea defaultValue={buildingDetail.summary} className="w-full h-72 resize-y text-gray-800 text-lg" />
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
