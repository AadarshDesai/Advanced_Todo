import React, { useState } from "react";
import { Topbar } from "../Topbar";
import { Addtodo } from "../Addtodo";
import { Todos } from "../Todos";

export const MainComponent: React.FC = ()=>{
    const [todos, setTodos] = useState([
        {text: "", completed: false, starred: false},
    ]);

    const addTodo = (newTodo: string)=>{
            setTodos((prevTodos)=> [...prevTodos, {text: newTodo, completed: false, starred: false}])
    }

    const CircleClicked = (index:number)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo, i)=>
                i == index ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const StarClicked = (index:number)=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo, i)=>
                i == index ? {...todo, starred: !todo.starred} : todo
            )
        )
    }

    return <div className="bg-purple-400 h-full relative">
        <Topbar/>
        <Todos todos={todos}
            CircleClicked={CircleClicked}
            StarClicked={StarClicked}
        />
        <Addtodo onAdd={addTodo}/>
    </div>
}