const Card = (props) => {
    const { fields, className, onClick } = props;

    return (
        <>
            <div className={className} id={fields["Employee ID"]} onClick={event => onClick(event.target.parentNode.getAttribute("id"))}>
                {
                    Object.keys(fields).map(field => {
                        return (
                            <div className="field">
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