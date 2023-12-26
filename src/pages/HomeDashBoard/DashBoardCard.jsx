
import { Card } from 'flowbite-react';

function DashBoardCard({project}){

    const {projectName, clientName, extraInfo} = project

    return (
        <Card href="#" className="lg:min-w-[29rem] min-w-[22rem] shadow-none border-2">

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {projectName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {clientName}
            </p>

            <ul className={"flex gap-5"}>
                {
                    extraInfo?.map((item, index) => (
                        <li className={"bg-teal-700 text-white text-sm p-2 rounded-md "} key={index}>{item}</li>
                    ))
                }
            </ul>
        </Card>
    )
}

export default DashBoardCard;