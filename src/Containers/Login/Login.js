import React from "react";
import './Login.css';
import TitleLogin from "./LoginComponent/TitleLogin";
import Input from "./LoginComponent/Input";
import TextPregunta from "./LoginComponent/TextPregunta";




const Login = () => {
    


return(
    <section id="login">
        <center>
        <TitleLogin/><br/>
        <Input
        attribute={{
            id: 'username',
            name: 'username',
            type: 'text',
            placeholder: 'Usuario'
            
        }}
     
        />
        <br/>
           <Input
        attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'password'
            
        }}
      
        />

        <br/>

        <button  class="btn_login" id="liveAlertBtn">LOG IN <i class='bx bx-right-arrow-alt' ></i> </button><br/>
        <TextPregunta/>
        </center>
        </section>
   
        )
    
}

export default Login;

