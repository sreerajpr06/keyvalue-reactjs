import InputField from "./InputField";
import InputSelect from "./InputSelect";
import Button from "./Button";

const Form = (props) => {
    const { id, action, inputFields, inputSelects, buttons, className, onChange } = props;

    return (
        <>
            <form action={action} id={id} className={className} onChange={onChange}>
                {inputFields.map(element => <InputField label={element.label} type={element.type} className="form-element"/>)}
                {inputSelects.map(element => <InputSelect label={element.label} name={element.name} className="form-element" options={element.options}/>)}
                {buttons.map(button => <Button label={button.label} handleClick={button.handleClick}/>)}
                {/* <Button label='Create' handleClick={() => {}} className='btn1'/> */}
                {/* <Button label='Cancel' handleClick={() => {}} className='btn2'/> */}
            </form>
        </>
    )

}

export default Form;