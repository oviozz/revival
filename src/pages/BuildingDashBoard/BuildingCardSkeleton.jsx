
import React from "react";
function BuildingCardSkeleton(){

    return (
        <div className="lg:max-w-[470px] w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow animate-pulse dark:bg-gray-800 dark:border-gray-700">
            <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
            <div className="p-5 flex flex-col gap-0.5">
                <div className="h-7 bg-gray-300 dark:bg-gray-600 mb-2 rounded-sm"></div>
                <div className="w-1/2 h-5 bg-gray-300 dark:bg-gray-600 mb-2 rounded-sm"></div>
                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded-sm"></div>
                <div className="w-1/2  h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded-sm"></div>
                <div className="h-7 bg-gray-300 dark:bg-gray-600 mb-2 rounded-md"></div>
            </div>
        </div>
    )

}
export default BuildingCardSkeleton;