import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

const Card = (props) => {
    const { fields, isHeader, className, onClick } = props;
    const empId = fields["Employee ID"];

    return (
        <>       
            <div className={className} onClick={event => onClick(empId, false, false)}>
                {
                    Object.keys(fields).map((field, i) => {
                        if(field !== "Action")
                            return (
                                <div key={i} className="field" onClick={event => {
                                    event.stopPropagation();
                                    onClick(empId, false, false)
                                }}> 
                                        {fields[field]}
                                </div>
                            )
                        else if(isHeader){
                            return (
                                <div key={i} className="field" onClick={event => {
                                    event.stopPropagation();
                                    onClick(empId, false, false)
                                }}> 
                                        {fields[field]}
                                </div>
                            )
                        }
                        else {
                            return (
                                <div key={i} className="field icons"> 
                                    <MdOutlineDelete className="delete-icon" onClick={event => {
                                        event.stopPropagation();
                                        onClick(empId, false, true)
                                    }}/>
                                    <MdOutlineEdit className="edit-icon" onClick={event => {
                                        event.stopPropagation();
                                        onClick(empId, true, false)
                                    }}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default Card;