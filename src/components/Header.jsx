import Button from "./Button";

const Header = (props) => {
    const { title, options, className } = props;

    return (
        <>
            <div className={className}>
                <p>{title}</p>
                {(options.filter) ? 
                    (
                        <p>Filter</p>
                    )                
                    : 
                    ( <></> )
                }
                {(options.button) ?
                    <Button />
                    :
                    <></>
                }
            </div>
        </>
    )
}

export default Header;