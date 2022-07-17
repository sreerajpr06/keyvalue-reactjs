const EmployeeDetails = (props) => {
    const { details } = props;

    return (
        <>
            <div>
                {
                    Object.keys(details).map( (key) => {
                        return (
                            <div>
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