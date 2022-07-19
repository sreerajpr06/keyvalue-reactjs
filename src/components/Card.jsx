import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const Card = (props) => {
    const { fields, isHeader, className, onClick } = props;

    return (
        <>
            {/* {console.log(fields["Employee ID"])} */}
            <div empid={fields["Employee ID"]} className={className} onClick={event => onClick(event.target.attributes.empid.nodeValue)}>
                {
                    Object.keys(fields).map((field, i) => {
                        if(field !== "Action")
                            return (
                                <div key={i} className="field" onClick={event => onClick(event.target.parentElement.getAttribute("empid"))}> 
                                        {fields[field]}
                                </div>
                            )
                        else if(isHeader){
                            return (
                                <div key={i} className="field" onClick={event => onClick(event.target.parentElement.getAttribute("empid"))}> 
                                        {fields[field]}
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={i} className="field icons"> 
                                    <MdOutlineDelete className="delete-icon" />
                                    <MdOutlineEdit className="edit-icon" />
                                </div>
                            )
                        }
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