import Image from "next/image";
import Options from "./Options";
import SearchBox from "./SearchBox";

export default function Sidebar() {
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
            <Options />
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