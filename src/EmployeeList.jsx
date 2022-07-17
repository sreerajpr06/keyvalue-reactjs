import Header from "./components/Header";
import Card from "./components/Card"
import EmployeeDetails from "./EmployeeDetails";
import { useState } from "react";

const EmployeeList = () => {
    const [page, setPage] = useState("List");

    const onClick = (event) => {
        console.log(event)
    }
    return (
        <>
            <Header 
                title="Employee List"
                options={
                    {
                        filter: true,
                        button: true
                    }
                }
            />
            <Card 
                fields={
                    {
                        "Employee Name": "Employee Name",
                        "XYZ": "XYZ",
                        "Joining Date": "Joining Date",
                        "Role": "Role",
                        "Status": "Status",
                        "Experience": "Experience",
                        "Action": "Action"
                    }
                }
                className=""
                onClick={onClick}
            />
            <Card 
                fields={
                    {
                        "Employee Name": "Employee Name",
                        "XYZ": "XYZ",
                        "Joining Date": "Joining Date",
                        "Role": "Role",
                        "Status": "Status",
                        "Experience": "Experience",
                        "Action": "Action"
                    }
                }
                className=""
                onClick={onClick}
            />
            <Card 
                fields={
                    {
                        "Employee Name": "Employee Name",
                        "XYZ": "XYZ",
                        "Joining Date": "Joining Date",
                        "Role": "Role",
                        "Status": "Status",
                        "Experience": "Experience",
                        "Action": "Action"
                    }
                }
                className=""
                onClick={onClick}
            />
            <Card 
                fields={
                    {
                        "Employee Name": "Employee Name",
                        "XYZ": "XYZ",
                        "Joining Date": "Joining Date",
                        "Role": "Role",
                        "Status": "Status",
                        "Experience": "Experience",
                        "Action": "Action"
                    }
                }
                className=""
                onClick={onClick}
            />
            <Card 
                fields={
                    {
                        "Employee Name": "Employee Name",
                        "XYZ": "XYZ",
                        "Joining Date": "Joining Date",
                        "Role": "Role",
                        "Status": "Status",
                        "Experience": "Experience",
                        "Action": "Action"
                    }
                }
                className=""
                onClick={onClick}
            />
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