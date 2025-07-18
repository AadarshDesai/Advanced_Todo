import Image from "next/image"

export default function Options() {

    const options = [
        {
            image: "/Icons/sunny.png",
            label: "My Day"
        },
        {
            image: "/Icons/star.png",
            label: "Important"
        },
        {
            image: "/Icons/list.png",
            label: "Planned"
        },
        {
            image: "/Icons/home.png",
            label: "Tasks"
        }
    ]
    return (
        <div className="flex flex-col gap-2">
           {options.map((item, index) => {
                return <div key={index} className="flex gap-4 px-3 py-2 m-1 hover:bg-gray-100 rounded">
                        <Image 
                            src={item.image}
                            alt={item.label}
                            width={20}
                            height={20}
                            priority
                            className="object-contain"
                        />
                        <h3>{item.label}</h3>
                </div>
           })}
        </div>
    )
}