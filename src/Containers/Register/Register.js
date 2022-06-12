import React, {useState} from "react";
import TitleRegister from "./RegisterComponent/TituloRegister";
import Input from "../Login/LoginComponent/Input";
import Pregunta from "./RegisterComponent/Pregunta";
import axios from "axios";

const Register = () => {
    const [Inputs, setInputs] = useState({
        username: "",
        contraseña: ""
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);
    const {username, contraseña} = Inputs;
    const HandleChange = (e) => {
    setInputs({...Inputs, [e.target.name]: e.target.name});

    };

    
    const onSumbit = (e) => {
        e.preventDefault()
        if(username !== '' && contraseña !== ''){
            const Usuario = {
                username,
                contraseña
            };
            setLoading(true)
             axios.post('http://localhost:4000/register', Usuario)
            .then(({data}) =>console.log(data))
        }
       

    }

    return(
        <section id="register">
            <center>
            <TitleRegister/><br/>


 <form onSubmit={(e) => onSumbit(e)}/>    


<Input
        onchange={(e)=> HandleChange(e)}
        attribute={{
            id: 'username',
            name: 'username',
            type: 'text',
            placeholder: 'Usuario'
            
        }}
       
        />
        <br/>
       
           <Input
        onchange={(e)=> HandleChange(e)}
        attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'password'
            
        }}
        />

        <br/>
        <button   class="btn__register" id="liveAlertBtn">REGISTRARSE <i class='bx bx-right-arrow-alt' ></i> </button><br/>

        <Pregunta/>
            </center>
          
        </section>
        )
        
}

export default Register;
