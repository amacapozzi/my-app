import React from "react";
import './Login.css'


let texth2 = ['LABURADOS', <b className="login__change__color"> MARKET</b>]

function Login () {
    return(
    
<section className="index__login">

    <div className="container"></div>
<center>

<form action="" method="POST"/>
<h2 className="login__title">{texth2}</h2>
<br/>
<input type='text' placeholder='Usuario' name='usuario' id='usuario' minLength='1' required/>
<br/><br/>
<input type='password' placeholder="Contraseña" name="password" id="password"  minLength='1' required/>
<div className="mt-3">
<button class="btn_login" id="liveAlertBtn">LOG IN <i class='bx bx-right-arrow-alt' ></i> </button><br/>
</div>
<br/><p class="align-left">¿No tienes cuenta? <a href="/register"><b class="register_color">Registrarse</b></a></p><br/>
</center>

</section>        
        )
    
}

export default Login;

