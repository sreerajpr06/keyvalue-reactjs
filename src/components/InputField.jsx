import "../styles/styles.css"

const InputField = ({
    label,
    name,
    onChange,
    className
}) => {
    return (
        <div className={className}>
            <p>{label}</p>
            <input type="text" onChange={(event) => onChange(name, event.target.value)}/>
        </div>
    )
}

export default InputField