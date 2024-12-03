import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";
import { Todos } from "../Todos";
import { useState } from "react";

export function GettingStarted(){
    const [todos, setTodos] = useState([
        { text: "Add your first task by clicking on ➕ Add a task", completed: false, starred: false },
        { text: "👉 Select this task to add a reminder and due date", completed: false, starred: false },
        { text: "Break this task into smaller steps", completed: false, starred: false },
        { text: "Open this task's detail view to add it to My Day 🌞", completed: false, starred: false },
        { text: "Add #hashtags to a task's title to categorise it", completed: false, starred: false },
        { text: "Check out our sample grocery list and customise it for yourself", completed: false, starred: false },
        { text: "Tap all the circles in this list to complete your tasks ✅", completed: false, starred: false }

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

    return <div className="relative bg-violet-400 h-full flex-1 rounded-sm overflow-scroll">
        <Topbar/>
        <Todos todos={todos}
            CircleClicked = {CircleClicked}
            StarClicked = {StarClicked}
        />
        <Addtodo onAdd={addTodo}/>
    </div>
}