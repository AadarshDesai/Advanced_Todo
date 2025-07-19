import Image from "next/image";
import SearchBox from "./SearchBox";
import { useState } from "react";
import Link from "next/link";


export default function Sidebar() {

    const [selected, setSelected] = useState("Myday");

    const options = [
        { image: "/Icons/sunny.png", href: "/myday", label: "Myday" },
        { image: "/Icons/star.png", href: "/important", label: "Important" },
        { image: "/Icons/list.png", href: "/planned", label: "Planned" },
        { image: "/Icons/home.png", href: "/tasks", label: "Tasks" }
    ];

    const handleClick = (option: string) => {
        setSelected(option)
    }

    return (
        <div className="relative h-screen">
            <div className="flex gap-2 p-2">
                <div className="h-10 w-10 rounded-full bg-blue-300 pt-2 pl-2">AD</div>
                <div>
                    <p className="font-semibold">Aadarsh Desai</p>
                    <p className="text-gray-500 text-xs">adidesai91@gmail.com</p>
                </div>
            </div>
            <SearchBox/>
            <div className="flex flex-col gap-2">
                {options.map((item, index) => {
                    return <Link onClick={() => handleClick(item.label)} href={item.href} key={index} className={item.label === selected? "flex gap-4 px-3 py-2 m-1 bg-gray-100 cursor-pointer" :"flex gap-4 px-3 py-2 m-1 hover:bg-gray-100 rounded cursor-pointer"}>
                            <Image 
                                src={item.image}
                                alt={item.label}
                                width={20}
                                height={20}
                                priority
                                className="object-contain"
                            />
                            <h3>{item.label}</h3>
                    </Link>
                })}
            </div>
            <hr className="mt-2 mx-1 border-t border-gray-300"/>
            <div className="flex gap-4 px-3 py-2 m-1 hover:bg-gray-100 rounded">
                <Image
                    src="/Icons/waving-hand.png"
                    alt="waving-hand-logo"
                    width={20}
                    height={20}
                    priority
                    className="object-contain"
                />
                <h3>Getting Started</h3>
            </div>
            <div className="grid grid-cols-[1fr_35px] p-2 items-center h-12 absolute bottom-0 w-full">
                <button className="flex hover:bg-gray-100 p-2 gap-2 rounded">
                   <Image 
                        src="/Icons/plus.png"
                        alt="add-icon"
                        width={15}
                        height={15}
                        priority
                        className="object-contain"
                    />
                    <h3>New List</h3>
                </button>
                <button className="hover:bg-gray-100 rounded p-2 text-center">
                    <Image 
                    src="/Icons/credit-card.png"
                    alt="add-icon"
                    width={24}
                    height={24}
                    priority
                    className="object-contain"
                />
                </button>
            </div>
        </div>
    )
}