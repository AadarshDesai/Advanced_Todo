import Image from "next/image"

export default function Header(){
    return (
        <div className="p-1 flex gap-2 items-center">
            <Image
                src="/Icons/todo.png"
                alt="Logo"
                width={30}
                height={30}
                priority
            />
            <h2 className="text-lg font-medium">The To Do App</h2>
        </div>
    )
}