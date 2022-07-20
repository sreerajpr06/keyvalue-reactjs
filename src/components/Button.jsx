import '../styles/button.css'

const Button = (props) => {
    const {label, name, handleClick, description, className} = props;

    return (
        <>
            <button onClick={event => handleClick(name)} className={className}>
                        {label}
            </button>
            {
                (description) ? 
                        <div onClick={event => handleClick(name)} className="btn-description">
                            <p>{description}</p>
                        </div> 
                    :   null
            }
        </>
    );
}

export default Button;