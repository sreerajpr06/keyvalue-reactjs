import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import "./styles/styles.css"

const CreateEmployee = () => {
    const onClick = () => {
        const val = prompt('Enter your name');
        console.log(val);
      }

    const inputFields = [
        { label: "Employee Name", type: "text"},
        { label: "Employee ID", type: "text"},
        { label: "Employee Email", type: "email"},
        { label: "Joining Date", type: "date" },
        { label: "Experience", type: "text" },
        { label: "Address", type: "text" },
        { label: "Upload ID proof", type: "file"}
    ]

    const inputSelects = [
        { 
            label: "Role", name: "role", 
            options: [
            { key: "hr", value: "HR" },
            { key: "manager", value: "Manager" },
            { key: "admin", value: "Admin"}
            ]
        },
        {
            label: "Status", name: "status",
            options: [
                { key: "active", value: "Active" },
                { key: "inactive", value: "Inactive" }
            ]
        }
    ]
    return (
        <>
            <main>
                <div>
                    Create Employee
                </div>
                <form action="" id="create-emp" className="form-flex">
                    {inputFields.map(element => <InputField label={element.label} type={element.type} className="form-element"/>)}
                    {inputSelects.map(element => <InputSelect label={element.label} name={element.name} className="form-element" options={element.options}/>)}
                    <Button label='Create' handleClick={() => {}} className='btn1'/>
                    <Button label='Cancel' handleClick={() => {}} className='btn2'/>
                </form>
            </main>
        </>
    );
}

export default CreateEmployee;