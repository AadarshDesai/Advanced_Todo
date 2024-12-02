import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";

export function GettingStarted(){
    return <div className="bg-violet-400 h-full flex-1 rounded-sm">
        <Topbar/>
        <Addtodo/>
    </div>
}