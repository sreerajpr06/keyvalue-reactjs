import Button from "./components/Button";
import InputField from "./components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState({
        userName: "",
        password: ""
    });

    const onChangeUsername = (value) => {
        setCredentials({
            ...credentials,
            userName: value
        })
    }
    const onChangePassword = (value) => {
        setCredentials({
            ...credentials,
            password: value
        })
    }
    
    return(
        <>
            <InputField label='UserName' onChange={onChangeUsername}/>
            <InputField label='Password' onChange={onChangePassword}/>
            <Button label='Login' handleClick={() => navigate('/create')}/>
        </>
    )
}

export default Login;