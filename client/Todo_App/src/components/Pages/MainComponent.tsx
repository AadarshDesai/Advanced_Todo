import { useState } from "react";
import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";
import { Todos } from "../Todos";

export function MainComponent(){
    const [todos, setTodos] = useState([
        { text: "", completed: false, starred: false },
    ]);

    const addTodo = (newTodo: string) => {
        if (newTodo.trim()) {
            setTodos((prevTodos) => [...prevTodos, {text: newTodo, completed: false, starred: false}]);
        }
    };

    const CircleClicked = (index: number) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo, i)=>
                i === index ? {...todo, completed: !todo.completed} : todo
            )
        );
    }

    const StarClicked = (index: number) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo, i)=>
                i === index ? {...todo, starred: !todo.starred} : todo
            )
        );
    }

    return <div className="relative bg-purple-400 h-full flex-1 rounded-sm">
        <Topbar/>
        <Todos todos={todos}
            CircleClicked = {CircleClicked}
            StarClicked = {StarClicked}
        />
        <Addtodo onAdd={addTodo}/>
    </div>
}