import profile from "../assets/profile.jpg";

export function Sidebar(){
    return <div className="flex flex-col">
        <div className="flex mt-5 mx-3 space-x-3 items-center">
            <img src={profile} alt="profile picture" className="rounded-full h-14 w-14"/>
            <p className="font-medium">Aadarsh Desai<br/>
            <span className="font-normal">aadesai@algomau.ca</span></p>
        </div>
        <div className="flex justify-between m-3 border-b border-b-neutral-700  shadow-sm border px-2 py-1 rounded-sm">
            <input type="text" placeholder="Search" className="focus:outline-none"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 pt-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
        <div>Options</div>
        <div>Pages</div>
        <div>New List</div>
    </div>
}