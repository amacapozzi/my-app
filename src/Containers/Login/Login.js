import React from "react";
import './Login.css';
import ButtonLogin from "./LoginComponent/ButtonLogin";
import TitleLogin from "./LoginComponent/TitleLogin";
import Input from "./LoginComponent/Input";
import TextPregunta from "./LoginComponent/TextPregunta";



const Login = () => {
return(
    <div>
        <TitleLogin/>
        <Input
        attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Usuario'
            
        }}/>
        <ButtonLogin/>
        <TextPregunta/>
       
</div>
        )
    
}

export default Login;

