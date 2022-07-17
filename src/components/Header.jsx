import Button from "./Button";

const Header = (props) => {
    const { title, options } = props;

    return (
        <>
            <div>
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