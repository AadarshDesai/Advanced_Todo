import React, { useState } from "react";
import { Plus } from 'lucide-react';

interface AddtodoProps{
    onAdd: (todo: string) => void;
}

export const Addtodo: React.FC<AddtodoProps> = ({onAdd})=>{
    const [inputValue, setInputValue] = useState("");

    const handleAdd = ()=>{
        onAdd(inputValue);
        setInputValue("");
    }

    const handleEnter = (event:any)=>{
        if(event.key === "Enter"){
            onAdd(inputValue);
            setInputValue("");
        }
    }

    return <div className="flex justify-center">
        <div className="absolute bottom-0 mb-7 rounded-md flex bg-white text-neutral-900 p-3 w-[85%]">
            <Plus onClick={handleAdd} className="pr-1 text-neutral-900 cursor-pointer"/>
            <input type="text" placeholder="Add Task" onKeyDown={handleEnter} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="focus:outline-none pl-1"/>
        </div>
    </div>
}