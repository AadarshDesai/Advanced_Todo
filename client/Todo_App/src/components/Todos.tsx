import { Circle, CheckCircle, Star } from 'lucide-react';


interface TodosProps {
    todos: {
        text: string;
        completed: boolean;
        starred: boolean;
    }[];
    CircleClicked: (index:number) => void;
    StarClicked: (index:number) => void;
}

export const Todos: React.FC<TodosProps> = ({ todos, CircleClicked, StarClicked }) => {

    return <div>
        <ul className='flex flex-col h-[calc(100vh-250px)] overflow-y-scroll'>
            {todos
            .map((todo, originalIndex) => ({ ...todo, originalIndex }))
            .filter((todo) => todo.text.trim() !== "")
            .map(({text, completed, starred, originalIndex})=>(
                    <div className='flex justify-center'>
                    <li key={originalIndex} className={`flex justify-between mb-0.5 p-3 bg-white text-neutral-900 mx-4 rounded-md w-[85%] ${completed ? "line-through text-gray-500" : ""}`}>
                        <div className="flex">
                            {completed ? (
                                <CheckCircle
                                    onClick={()=> CircleClicked(originalIndex)}
                                    className="pr-2 cursor-pointer text-green-500"
                                />
                            ):(
                                <Circle
                                    onClick={() => CircleClicked(originalIndex)}
                                    className="pr-2 cursor-pointer text-gray-500"
                                />
                            )}
                            <span>{text}</span>
                        </div>
                        {starred ? (
                            <Star
                                onClick={()=> StarClicked(originalIndex)}
                                className="pr-2 cursor-pointer fill-orange-400 text-orange-400"
                            />
                        ):(
                            <Star
                                onClick={()=>StarClicked(originalIndex)}
                                className="pr-2 cursor-pointer text-gray-500"
                            />
                        )}
                    </li>
                    </div>
            ))}
        </ul>
    </div>
}