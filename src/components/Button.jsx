import '../styles/button.css'

const Button = (props) => {
    const {label, handleClick, className} = props;

    return (
        <button onClick={handleClick} className={className}>
            {label}
        </button>
    );
}

export default Button;