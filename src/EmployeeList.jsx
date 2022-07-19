import Header from "./components/Header";
import Card from "./components/Card"
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import SideNav from "./components/SideNav";
import Divider from "./components/Divider";
import { useGetEmployeesQuery } from './services/employee'
import UpdateEmployee from "./UpdateEmployee";
// import employees from "./components/EmpList";

const EmployeeList = () => {
    const [page, setPage] = useState("List");
    const [ empSelected, setEmpSelected ] = useState("");
    const { data, error, isLoading } = useGetEmployeesQuery();
    // const [employees, setEmployees] = useState([]);
    
    const onCardClick = (empId, isEdit, isDelete) => {
        if(empId) {
            let emp = data.data.employees.find(emp => emp["id"] === empId)
            setEmpSelected(emp);

            if(isEdit)
                setPage("UpdateEmployee")
            else if(isDelete)
                setPage("List")
            else
                setPage("EmployeeDetails");
        }
    }

    const onCreateEmpClick = () => {
        setPage("CreateEmployee")
    }

    return (
        <>
            <SideNav/>
            {/* <Divider/> */}
            { 
                (page === "List" )? 
                (
                    <main>
                        <Header 
                            title="Employee List"
                            options={
                                {
                                    filter: true,
                                    button: {
                                        isValid: true,
                                        content: "+",
                                        description: "Create Employee",
                                        className: "btn-create-emp",
                                        onClick: onCreateEmpClick
                                    }
                                }
                            }
                            className="header"
                        />
                        <Card 
                            fields={
                                {
                                    "Employee Name": "Employee Name",
                                    "Employee ID": "Employee ID",
                                    "Joining Date": "Joining Date",
                                    "Role": "Role",
                                    "Status": "Status",
                                    "Experience": "Experience",
                                    "Action": "Action"
                                }
                            }
                            isHeader={true}
                            className="card-header"
                            onClick={() => {}}
                        />
                        {
                            error ? (
                                <>Oh no, there was an error</>
                            ) : isLoading ? (
                                <>Loading...</>
                            ) : data ? (
                                <> 
                                    {
                                        data.data.employees.map(emp => {
                                            {/* console.log(emp); */}
                                            return (
                                                <Card 
                                                    fields={
                                                        {
                                                            "Employee Name": emp["name"],
                                                            "Employee ID": emp["id"],
                                                            "Joining Date": emp["joindate"],
                                                            "Role": emp["role"],
                                                            "Status": emp["status"],
                                                            "Experience": emp["experience"],
                                                            "Action": "action"
                                                        }
                                                    }
                                                    isHeader={false}
                                                    className="card"
                                                    onClick={onCardClick}
                                                />
                                            )
                                        })
                                    }
                                </>
                            ) : null
                        }
                    </main>
                )
                :

                ( 
                    (page === "EmployeeDetails") ?
                    <main>
                        {console.log(empSelected)}
                        <EmployeeDetails 
                            details={{
                                "Employee Name": empSelected["name"],
                                "Employee ID": empSelected["id"],
                                "Joining Date": empSelected["joindate"],
                                "Role": empSelected["role"],
                                "Status": empSelected["status"],
                                "Experience": empSelected["experience"]
                            }}
                        />
                    </main>
                    : 
                    (page === "CreateEmployee") ?
                        <>
                            <CreateEmployee />
                        </>
                    :
                        <>
                            <UpdateEmployee emp={empSelected}/>
                        </>
                )
            }
        </>
    )
}

export default EmployeeList;