import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";

export function Important(){
    return <div className="bg-red-400 h-full flex-1 rounded-sm">
        <Topbar/>
        <Addtodo/>
    </div>
}