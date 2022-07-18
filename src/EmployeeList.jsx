import Header from "./components/Header";
import Card from "./components/Card"
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";
import CreateEmployee from "./CreateEmployee";

const EmployeeList = () => {
    const [page, setPage] = useState("List");

    const employees = [
        {
            "Employee Name": "Vishal M",
            "Employee ID": "Lazada", 
            "Joining Date": "12.04.2021",
            "Role": "Full Stack",
            "Status": "Probation",
            "Experience": "5 years"
        },
        {
            "Employee Name": "Susan Kurian",
            "Employee ID": "XYZ", 
            "Joining Date": "12.04.2021",
            "Role": "UI Engineer",
            "Status": "Probation",
            "Experience": "7 years"
        },
        {
            "Employee Name": "Yugesh",
            "Employee ID": "XYZ1", 
            "Joining Date": "12.04.2021",
            "Role": "Devops",
            "Status": "Active",
            "Experience": "6 years"
        },
        {
            "Employee Name": "Midhun",
            "Employee ID": "Lazada1", 
            "Joining Date": "12.04.2021",
            "Role": "Full Stack",
            "Status": "Active",
            "Experience": "5 years"
        }
    ]

    const onCardClick = (empId) => {
        setPage("EmployeeDetails")
    }

    const onCreateEmpClick = () => {
        setPage("CreateEmployee")
    }

    return (
        <>
            { 
                (page === "List" )? 
                (
                    <main>
                        <Header 
                            title="Employee List"
                            options={
                                {
                                    filter: true,
                                    button: true
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
                            onClick={onCardClick}
                        />
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
                                    />
                                )
                            })
                        }
                    </main>
                )
                :
                ( 
                    (page === "EmployeeDetails") ?
                    <main>
                        <EmployeeDetails 
                            details={{
                                "Employee Name": "Vishal M",
                                "Employee ID": "E34656767",
                                "Joining Date": "12.04.2021",
                                "Role": "Full Stack",
                                "Status": "Probation",
                                "Experience": "5 years",
                                "Address": "No:C-9, T.V.K Industrial Estate, Kerala 600032",
                                "Employee ID Proof": true
                            }}
                        />
                    </main>
                    :
                    <>
                        <CreateEmployee />
                    </>
                )
            }
            {/* <EmployeeDetails 
                details={{
                    "Employee Name": "Vishal M",
                    "Employee ID": "E34656767",
                    "Joining Date": "12.04.2021",
                    "Role": "Full Stack",
                    "Status": "Probation",
                    "Experience": "5 years",
                    "Address": "No:C-9, T.V.K Industrial Estate, Kerala 600032",
                    "Employee ID Proof": true
                }}
            /> */}
        </>
    )
}

export default EmployeeList;