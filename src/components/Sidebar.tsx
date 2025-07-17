export default function Sidebar() {
    return (
        <>
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-300 text-center pt-2">AD</div>
                <div>
                    <p className="font-semibold">Aadarsh Desai</p>
                    <p className="text-gray-500 text-xs">adidesai91@outlook.com</p>
                </div>
            </div>
            <input type="text" placeholder="Search" className="mt-2 p-2 border rounded text-xs" />

            <div>
                {[
                    "My Day",
                    "Important",
                    "Planned",
                    "Tasks"
                ].map((item)=>(
                    <p className="" key={item}>{item}</p>
                ))}
            </div>
        </>
    )
}