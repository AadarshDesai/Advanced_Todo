import { Addtodo } from "../Addtodo";
import { Topbar } from "../Topbar";

export function MainComponent(){
    return <div className="bg-purple-400 h-full flex-1 rounded-sm">
        <Topbar/>
        <Addtodo/>
    </div>
}