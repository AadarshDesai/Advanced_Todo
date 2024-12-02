import React from "react";
import { Plus } from 'lucide-react';

export const Addtodo: React.FC = () => {
    return <div className="bottom-0 fixed mb-7 flex w-[94%] sm:w-[79%] p-3 bg-white text-neutral-900 mx-4 rounded-md">
        <Plus className="text-neutral-900 pr-1"/>
        <input type="text" placeholder="Add Task" className="focus:outline-none pl-1"/>
    </div>
}