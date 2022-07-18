import "../styles/styles.css"

const InputField = ({
    label,
    onChange,
    className
}) => {
    return (
        <div className={className}>
            <div>{label}</div>
            <input type="text" onChange={(event) => onChange(event.target.value)}/>
        </div>
    )
}

export default InputField