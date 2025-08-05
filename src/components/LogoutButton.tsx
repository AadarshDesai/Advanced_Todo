"use client"
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function LogoutButton(){
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("api/logout", { method: "POST"})
        router.push("/login");
    }

    return (
        <div className="group">
            <Image className="absolute right-3 bottom-1"
                src="/icons/power.png"
                alt="Logo"
                width={27}
                height={27}
                priority

                onClick={handleLogout}
            />
            <div className="p-2 m-2 absolute right-1 top-7 bg-gray-500 rounded text-white hidden group-hover:block">
                <p>Logout</p>
            </div>
        </div>
    )
}