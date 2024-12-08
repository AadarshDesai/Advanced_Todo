import { Circle, CheckCircle, Star } from "lucide-react";


interface TodoProps {
    todos: {
        text: string;
        completed: boolean;
        starred: boolean;
    }[];
    CircleClicked: (index:number)=>void;
    StarClicked: (index:number)=>void;
}

export const Todos: React.FC<TodoProps> = ({todos, CircleClicked, StarClicked})=>{

    return <div>
    <ul className="flex flex-col h-[calc(100vh-270px)] sm:h-[calc(100vh-250px)] overflow-y-scroll">
            {todos
            .map((todo, originalIndex)=>({...todo, originalIndex}))
            .filter((todo)=> todo.text.trim() != "")
            .map(({text, completed, starred, originalIndex})=>(
                <div className="flex justify-center">
                    <li key={originalIndex} className={`mb-0.5 rounded-md flex bg-white text-neutral-900 p-3 justify-between w-[85%] mx-4 text-clip overflow-hidden ${completed ? "line-through text-gray-500": ""}`}>
                        <span className="flex">
                            {completed ? (
                                <CheckCircle
                                onClick={()=> CircleClicked(originalIndex)}
                                className="text-green-500 pr-2 cursor-pointer w-6 h-6 flex-shrink-0"
                                />
                            ) : (
                                <Circle 
                                onClick={()=>CircleClicked(originalIndex)}
                                className="text-gray-500 pr-2 cursor-pointer w-6 h-6 flex-shrink-0" 
                                />
                            )}
                            <span className="break-words overflow-hidden max-w-[calc(100%-20px)] whitespace-normal">{text}</span>
                        </span>
                        {starred ? (
                            <Star 
                            onClick={()=>StarClicked(originalIndex)}
                            className="pr-2 text-orange-400 cursor-pointer fill-orange-400 w-6 h-6 flex-shrink-0"
                            />
                        ):(
                            <Star 
                            onClick={()=>StarClicked(originalIndex)}
                            className="pr-2 text-gray-500 cursor-pointer w-6 h-6 flex-shrink-0"
                            />
                        )}
                    </li>
                </div>
            ))}
        </ul>
    </div>
}