const Card = (props) => {
    const { fields, className, onClick } = props;

    return (
        <>
            {/* {console.log(fields["Employee ID"])} */}
            <div empid={fields["Employee ID"]} className={className}>
                {
                    Object.keys(fields).map((field, i) => {
                        return (
                            <div key={i} className="field" onClick={event => onClick(event.target.parentNode.getAttribute("empid"))}>
                                {fields[field]}
                            </div>
                        )
                    })
                }
                    {/* fields.map( field => {
                        return (
                            <div className="field">
                                {field}
                            </div>
                        )
                    }) */}
            </div>
        </>
    )
}

export default Card;