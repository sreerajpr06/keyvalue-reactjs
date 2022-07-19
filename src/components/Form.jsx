import InputField from "./InputField";
import InputSelect from "./InputSelect";
import Button from "./Button";

const Form = (props) => {
    const { id, action, inputFields, inputSelects, buttons, className, onChange } = props;

    return (
        <>
            <form action={action} id={id} className={className}>
                {inputFields.map(element => <InputField label={element.label} name={element.name} type={element.type} className="form-element" onChange={onChange}/>)}
                {inputSelects.map(element => <InputSelect label={element.label} name={element.name} className="form-element" options={element.options} onChange={onChange}/>)}
                {buttons.map(button => <Button label={button.label} name={button.name} handleClick={button.handleClick}/>)}
                {/* <Button label='Create' handleClick={() => {}} className='btn1'/> */}
                {/* <Button label='Cancel' handleClick={() => {}} className='btn2'/> */}
            </form>
        </>
    )

}

export default Form;