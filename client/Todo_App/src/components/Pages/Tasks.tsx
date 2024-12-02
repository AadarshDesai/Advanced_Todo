import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";

export function Tasks(){
    return <div className="bg-cyan-400 h-full flex-1 rounded-sm">
        <Topbar/>
        <Addtodo/>
    </div>
}