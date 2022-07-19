import Header from "./components/Header";
import Card from "./components/Card"
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";
import SideNav from "./components/SideNav";
import Divider from "./components/Divider";
import { useGetEmployeesQuery } from './services/employee'
// import employees from "./components/EmpList";

const EmployeeList = () => {
    const [page, setPage] = useState("List");
    const [employees, setEmployees] = useState([]);
    const [ empSelected, setEmpSelected ] = useState("");
    const { data, error, isLoading } = useGetEmployeesQuery();

    
    const onCardClick = (empId) => {
        let emp = employees.find(emp => emp["Employee ID"] === empId)
        setEmpSelected(emp);
        setPage("EmployeeDetails");
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
                                        className: "btn-create-emp"
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
                                        employees.map(emp => {
                                            return (
                                                <Card 
                                                    fields={
                                                        {
                                                            "Employee Name": emp["Employee Name"],
                                                            "Employee ID": emp["Employee ID"],
                                                            "Joining Date": emp["Joining Date"],
                                                            "Role": emp['Role'],
                                                            "Status": emp["Status"],
                                                            "Experience": emp["Experience"],
                                                            "Action": "action"
                                                        }
                                                    }
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
                        <EmployeeDetails 
                            details={{
                                "Employee Name": empSelected["Employee Name"],
                                "Employee ID": empSelected["Employee ID"],
                                "Joining Date": empSelected["Joining Date"],
                                "Role": empSelected["Role"],
                                "Status": empSelected["Status"],
                                "Experience": empSelected["Experience"],
                                "Address": empSelected["Address"],
                                "Employee ID Proof": empSelected["Employee ID Proof"]
                            }}
                        />
                    </main>
                    :
                    <>
                        <CreateEmployee />
                    </>
                )
            }
        </>
    )
}

export default EmployeeList;