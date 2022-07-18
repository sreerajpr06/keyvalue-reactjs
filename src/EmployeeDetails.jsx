import Header from "./components/Header";

const EmployeeDetails = (props) => {
    const { details } = props;

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
            <div className="emp-details">
                {
                    Object.keys(details).map( (key) => {
                        return (
                            <div className="emp-details-field">
                                <p>{key}</p>
                                <p>{details[key]}</p> 
                            </div>
                        )
                        
                    })
                }
            </div>
        </>
    )
}

export default EmployeeDetails;