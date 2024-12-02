import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";

export function Planned(){
    return <div className="bg-orange-300 h-full flex-1 rounded-sm">
        <Topbar/>
        <Addtodo/>
    </div>
}