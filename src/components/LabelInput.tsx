interface labelInputProps {
    name: string,
    type: string,
    placeholder: string
}
export const LabelInput = ({name, type, placeholder}: labelInputProps) => {
    return <div className="flex flex-col p-2">
        <label htmlFor={name} className="font-semibold">{name}</label>
        <input name={name} id={name} className="focus:outline-none border rounded p-2" type={type} placeholder={placeholder}/>
    </div>
}