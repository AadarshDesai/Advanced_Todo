export const Button = ({text}: {text: string}) => {
    return <div className="bg-gray-700 h-8 w-full mt-2 rounded-2xl text-center p-1 text-white font-semibold cursor-pointer">
        <button>{text}</button>
    </div>
}