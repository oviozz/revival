

import { HiOutlineFolderPlus } from "react-icons/hi2";

const EmptyState = ({title, style}) => {

    return (
        <div className={`flex flex-col justify-center items-center gap-1 ${style}`}>
            <HiOutlineFolderPlus size={70} color={'gray'}/>
            <h2 className={"text-xl text-gray-700 font-semibold"}>No {title}</h2>
            <h1 className={"text-gray-500"}>Get started by creating a new {title.toLowerCase()}.</h1>
        </div>
    )

}

export default EmptyState;