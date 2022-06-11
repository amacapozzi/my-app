import React, {useState} from "react";
import './Login.css';
import CompLogin from "./LoginComponent/LoginComponent";



const Login = () => {

    const [ user, setUser ] = useState('');

    function handleChange(name, value) {
        if(name === 'usuario') {
            setUser(value)

        }
    }

    console.log('usuario', user)

return(

    <CompLogin
    attribute={{
        id: 'usuario',
        name:'usuario',
        type:'text',
        placeHolder: 'Ingrese su usuario'
        
    }}

    handleChange={handleChange}
    />
        )
    
}

export default Login;

