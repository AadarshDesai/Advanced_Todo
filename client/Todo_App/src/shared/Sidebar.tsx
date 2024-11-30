import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../components/lib/constants/navigation";
import { SidebarLinkItem } from "../components/lib/constants/navigation";
import classNames from 'classnames';

import { Profile } from "../components/Profile";

interface SidebarLinkProps {
    item: SidebarLinkItem;
}

export function Sidebar(){
    return <div className="flex flex-col">
        <Profile/>
        <div className="flex justify-between m-3 border-b border-b-neutral-700  shadow-sm border px-2 py-1 rounded-sm">
            <input type="text" placeholder="Search" className="focus:outline-none"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        <div className="px-3">
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SidebarLink key={item.key} item={item}/>
            ))}
        </div>
        <div>Pages</div>
        <div>New List</div>
    </div>
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item }) => {
    const { pathname } = useLocation();

    return (
        <Link to={item.path}  className={classNames(pathname === item.path ? "bg-gray-100 rounded-md flex py-2 items-center" : "flex py-2 items-center hover:bg-gray-100 rounded-md" )}>
            <span className="pr-2 text-sm">{item.icon}</span>
            {item.label}
        </Link>
    )
}