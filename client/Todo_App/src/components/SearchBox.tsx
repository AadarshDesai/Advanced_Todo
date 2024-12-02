import React from "react";

export const SearchBox: React.FC = () => {
    return <div className="flex justify-between my-3 mx-2 border-b border-b-neutral-700  shadow-sm border px-2 py-1 rounded-sm w-full">
            <input type="text" placeholder="Search" className="focus:outline-none"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 pt-1 text-neutral-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
    </div>
}