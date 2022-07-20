import Header from "./components/Header";
import { useGetAnEmployeeQuery } from "./services/employee";


const EmployeeDetails = (props) => {
    const { id } = props;
    console.log(id)
    const {data: emp, error, isLoading} = useGetAnEmployeeQuery(id);

    if(emp){
        return (
            <>
                <Header 
                    title="Employee Details"
                    options={
                        {
                            filter: false,
                            button: false
                        }
                    }
                    className="header"
                />
                {/* <div className="emp-details">
                    {
                        Object.keys(emp).map( (key) => {
                            return (
                                <div className="emp-details-field">
                                    <p>{key}</p>
                                    <p>{emp[key]}</p> 
                                </div>
                            )
                            
                        })
                    }
                </div> */}
                {
                    error ? 
                    (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : emp ? (
                        <> 
                            {
                                
                                Object.keys(emp.data).map( (key) => {
                                    return (
                                        <div className="emp-details-field">
                                            <p>{key}</p>
                                            <p>{emp.data[key]}</p> 
                                        </div>
                                    )
                                    
                                })
                            }
                        </>
                    ) : null
                }
            </>
        )
    }
}

export default EmployeeDetails;