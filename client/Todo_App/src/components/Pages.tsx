import React, { useState } from "react";
import { NewList } from "./lib/constants/navigation";
import { SidebarLinkItem } from "../components/lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

interface SidebarLinkProps {
    item: SidebarLinkItem;
}

export const Pages: React.FC = () => {
    return <div className="w-full py-2 max-h-screen">
        {NewList.map((item)=>(
            <SidebarLink key={item.key} item={item}/>
        ))}
    </div>
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item }) => {
    const [count, setCount] = useState(0);
    const { pathname } = useLocation();

    return (
        <Link to={item.path}  className={classNames(pathname === item.path ? "bg-gray-100 rounded-md flex justify-between py-3 items-center w-full pr-2" : "flex justify-between py-2 items-center hover:bg-gray-100 rounded-md pr-2" )}>
            <div className="flex px-4 text-sm pl-2 gap-2">
                <span>{item.icon}</span>
                {item.label}
            </div>
            {count > 0 ? <div className="border rounded-full w-5 h-5 bg-neutral-200 flex justify-center items-center text-sm">
                {count}
            </div>: ""}
        </Link>
    )
}