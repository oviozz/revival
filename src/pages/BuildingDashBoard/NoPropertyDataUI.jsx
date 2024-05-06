
import React from 'react';

const NoPropertyDataUI = () => {
    return (
        <div className="flex justify-center items-center lg:py-48 py-24">
            <div className="text-center">
                <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                <h1 className="text-xl text-gray-600 font-semibold mt-4">No Results Found</h1>
            </div>
        </div>
    );
};


export default NoPropertyDataUI;
