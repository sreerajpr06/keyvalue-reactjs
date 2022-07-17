const InputSelect = (props) => {
    const { name, label, options } = props;
    return (
        <>
            <div>{label}</div>
            <select name={name}>
                {options.map(option => <option value={option.key}>{option.value}</option>)}
            </select>
        </>
    )
}

export default InputSelect;