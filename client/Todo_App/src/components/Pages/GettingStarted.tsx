import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";
import { Todos } from "../Todos";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "../../shared/Sidebar";

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
    const [menu, setMenu] = useState(false);

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

    const MenuClicked = ()=>{
        setMenu(!menu);
    }

    return <div className="relative bg-violet-400 h-full flex-1 rounded-sm">
        <div className="text-white absolute left-5 top-5 sm:hidden">
            <button onClick={MenuClicked}>
                <Menu className="w-10 h-10"/>
            </button>
        </div>
        {menu && (
            <div className="fixed left-0 h-full w-screen bg-white sm:hidden">
                <div className="text-black sm:hidden absolute right-2">
                    <button onClick={MenuClicked}>
                        <X className="w-14 h-14 pl-4 pt-6 text-neutral-600"/>
                    </button>
                </div>
                <Sidebar/>
            </div>
        )}
        <Topbar/>
        <Todos todos={todos}
            CircleClicked = {CircleClicked}
            StarClicked = {StarClicked}
        />
        <Addtodo onAdd={addTodo}/>
    </div>
}