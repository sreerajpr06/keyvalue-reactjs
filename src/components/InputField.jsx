import "../styles/styles.css"

const InputField = ({
    label,
    onChange,
    className
}) => {
    return (
        <div className={className}>
            <p>{label}</p>
            <input type="text" onChange={(event) => onChange(event.target.value)}/>
        </div>
    )
}

export default InputField