import {Menu} from "lucide-react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function MainComponent(){
    const [hamBurger, setHamBurger] = useState(false);

    const hamBurgerClick = () => {
        setHamBurger(!hamBurger);
    }


    return <div>
        <div className="lg:hidden justify-start m-4 p-2 backdrop-blur rounded-md w-12 h-12 text-white hover:bg-slate-500 hover:bg-opacity-40">
            <button onClick={hamBurgerClick}>
                <Menu className="h-8 w-8"/>
            </button>
        </div>
        {hamBurger && <div className="w-52 h-full sm:block">
                <Sidebar/>
            </div>}
    </div>
}