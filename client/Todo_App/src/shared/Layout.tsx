import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout(){
    return <div className='flex w-screen h-screen'>
        <div className='w-60 hidden sm:block sm:overflow-y-auto sm:overflow-x-hidden'>
            <Sidebar/>
        </div>
        <div className='h-full flex-1'>
            {<Outlet/>}
        </div>
    </div>
}