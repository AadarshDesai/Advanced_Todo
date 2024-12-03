import React, { useState } from "react";
import { Plus } from 'lucide-react';

interface AddtodoProps {
    onAdd: (todo: string) => void;
}

export const Addtodo: React.FC<AddtodoProps> = ({onAdd}) => {
    const [inputValue, setInputValue] = useState("");

    const handleAdd = ()=> {
        onAdd(inputValue);
        setInputValue("");
    }

    const handleEnter:any = (event:any) =>{
        if(event.key === "Enter"){
            onAdd(inputValue);
            setInputValue("");
        }
    }

    return <div className="flex justify-center">
        <div className="absolute bottom-0 mb-7 flex p-3 bg-white text-neutral-900 rounded-md w-[85%]">
            <Plus onClick={handleAdd}  className="text-neutral-900 pr-1 cursor-pointer"/>
            <input type="text" onKeyDown={handleEnter} value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder="Add Task" className="focus:outline-none pl-1 flex-1"/>
        </div>
    </div>
}