import Button from "./components/Button";
import Header from "./components/Header";
import { useState } from "react";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import "./styles/styles.css"
import Form from "./components/Form";
import { useAddEmployeeMutation } from "./services/employee";

const CreateEmployee = () => {
    const initialValue = {
        "name": "",
        "password": "",
        "role": "",
        "departmentId": "",
        "address": {
            "city": "",
            "state": "",
            "pin": ""
        }
    }
    const [ newEmpData, setNewEmpData ] = useState(initialValue)

    const [addEmployee, { isLoading, error}] = useAddEmployeeMutation();
    const handleAddEmployee = async () => {
        try {
          await addEmployee(newEmpData).unwrap()
          setNewEmpData(initialValue)
        } catch {
          console.log({
            title: 'An error occurred',
            description: "We couldn't save your emp, try again!",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      }

    const onClick = (name) => {
        if(name === "create")
            handleAddEmployee()
        else {

        }
    }

    const inputFields = [
        { label: "Employee Name", name: "name", type: "text"},
        { label: "Password", name: "password", type: "text" },
        { label: "Department ID", name: "departmentId", type: "text" },
        // { label: "Employee ID", name: "empId", type: "text"},
        // { label: "Employee Email", name: "email", type: "email"},
        // { label: "Joining Date", name: "joindate", type: "date" },
        // { label: "Experience", name: "experience", type: "text" },
        { label: "City", name: "city", type: "text" },
        { label: "State", name: "state", type: "text" },
        { label: "Pin", name: "pin", type: "text" },
        // { label: "Upload ID proof", name: "id-proof", type: "file"}
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
        // {
        //     label: "Status", name: "status",
        //     options: [
        //         { key: "active", value: "Active" },
        //         { key: "inactive", value: "Inactive" }
        //     ]
        // }
    ]

    const onChange = (name, value) => {
        const newEmp = {
            ...newEmpData,
            [name]: value
        }
        setNewEmpData(newEmp)
        console.log(newEmp)
    }

    return (
        <>
            <main>
                <Header 
                    title="Create Employee"
                    options={
                        {
                            filter: false,
                            button: false
                        }
                    }
                    className="header"
                />
                <Form 
                    id="create-emp"
                    className="form-flex"
                    inputFields={inputFields}
                    inputSelects={inputSelects}
                    onChange= {onChange}
                    buttons={
                        [
                            {
                                label: "Create",
                                name: "create",
                                handleClick: onClick
                            },
                            {
                                label: "Cancel",
                                name: "cancel",
                                handleClick: onClick
                            }
                        ]
                    }
                />
                {/* <form action="" id="create-emp" className="form-flex">
                    {inputFields.map(element => <InputField label={element.label} type={element.type} className="form-element"/>)}
                    {inputSelects.map(element => <InputSelect label={element.label} name={element.name} className="form-element" options={element.options}/>)}
                    <Button label='Create' handleClick={() => {}} className='btn1'/>
                    <Button label='Cancel' handleClick={() => {}} className='btn2'/>
                </form> */}
            </main>
        </>
    );
}

export default CreateEmployee;