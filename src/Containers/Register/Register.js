import axios from "axios";
import React, { useState } from "react";
import Pregunta from './RegisterComponent/Pregunta';
import TitleRegister from "./RegisterComponent/TituloRegister";
import './Register.css'
import { useNavigate } from "react-router-dom";



const Register = () => {
    const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });
  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);



  const { username, contraseña } = inputs;

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (username !== "" && contraseña !== "") {
      const Usuario = {
        username,
        contraseña
      };
      setLoading(true);
      await axios
        .post("http://181.229.81.24:4000/register", Usuario)
        .then((res) => {
          const { data } = res;
          setMensaje(data.mensaje);
          setInputs({ username: "", contraseña: "" });
          setTimeout(() => {
            setMensaje("");
            navigate("/login");
          }, 1500);
        })
        .catch((error) => {
          console.error(error);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
          }, 1500);
        });

      setLoading(false);
    }
  };

  return (
      
      <section id="register">
        <center>


            <TitleRegister/><br/>
        <form onSubmit={(e) => onSubmit(e)}>
           
              <input
                onChange={(e) => HandleChange(e)}
                value={username}
                name="username"
                id="username"
                type="text"
                placeholder="Usuario"
                autoComplete="off"
              />

            
<br/><br/>
             
              <input
                onChange={(e) => HandleChange(e)}
                value={contraseña}
                name="contraseña"
                id="contraseña"
                type="password"
                placeholder="Contraseña"
                autoComplete="off"
              />
              <br/>              <br/>

              <button type="sumbit"  class="btn__register" id="liveAlertBtn">REGISTRARSE <i class='bx bx-right-arrow-alt' ></i> </button><br/>
              {mensaje  &&  <div className="absolute right-0 top-0 m-5">
              <div class="flex items-center text-lime-600 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">

    <div class="text-green-500 rounded-full bg-white mr-3">
      <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
      </svg>
    </div>
   
    <div class="text-white max-w-xs ">
     {mensaje}
    </div>
  </div></div>}
          <Pregunta/>
        </form>
        </center>
      </section>
  );
};

export default Register;