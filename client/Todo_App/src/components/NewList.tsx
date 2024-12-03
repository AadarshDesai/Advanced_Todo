import React from "react";
import { Plus } from 'lucide-react';


export const NewList:React.FC = ()=>{
    return <button className="flex mx-2 absolute bottom-0 mb-4 hover:bg-neutral-100 rounded-md py-2 px-1 items-center w-56">
        <Plus className="pr-2 items-center justify-center"/>
        <span>New List</span>
    </button>
}