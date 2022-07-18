import "../styles/styles.css"

const InputSelect = (props) => {
    const { name, label, options, className } = props;
    return (
        <>
            <div className={className}>
                <div>{label}</div>
                <select name={name}>
                    {options.map(option => <option value={option.key}>{option.value}</option>)}
                </select>
            </div>
        </>
    )
}

export default InputSelect;