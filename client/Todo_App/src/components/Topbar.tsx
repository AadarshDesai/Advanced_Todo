import React from "react";
import { Lightbulb, Ellipsis } from 'lucide-react';

const day = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday"];
const month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const Topbar: React.FC = () =>{
    const date = new Date();
    return <div className="flex justify-between p-10">
        <div>
            <h1 className="font-bold text-white text-3xl">My Day</h1>
            <span className="text-white">{day[date.getDay()]+ ", " +date.getDate() + " " + month[date.getMonth()]}</span>
        </div>
        <div className="flex gap-2 mt-3">
            <Lightbulb className="bg-white rounded-md p-1 hover:cursor-pointer"/>
            <Ellipsis className="text-white hover:bg-neutral-50 rounded-md p-1 hover:text-black"/>
        </div>
    </div>
}