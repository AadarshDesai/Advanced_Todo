import Image from "next/image";

export default function SearchBox() {
    return (
        <div className="p-2 border border-gray-200 border-b-black rounded shadow-xl mx-2 mt-1 relative mb-6">
            <input className="focus:outline-none" type="text" placeholder="Search here"/>
            <Image className="absolute right-3 bottom-1.5 cursor-pointer hover:bg-slate-200 p-1 border rounded"
                src="/Icons/search.png"
                alt="Logo"
                width={30}
                height={30}
                priority
            />
        </div>
    )
}