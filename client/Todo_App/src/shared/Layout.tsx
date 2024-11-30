import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout(){
    return <div className='flex w-screen h-screen gap-4'>
        <div className='w-60 h-full hidden sm:block'>
            <Sidebar/>
        </div>
        <div className='bg-purple-400 h-full flex-1 rounded-lg'>
            {<Outlet/>}
        </div>
    </div>
}