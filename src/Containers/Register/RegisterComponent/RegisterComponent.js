import React from "react";
import '../Register.css'



let texth2 = ['LABURADOS', <b className="login__change__color"> MARKET</b>]

function RegisterComponent () {
    return (
        <section className="index__login" id="register">

    <div className="container"></div>
<center>

<form action="/" method="POST"/>
<h2 className="login__title">{texth2}</h2>
<br/>
<input type='text' placeholder='Usuario' name='usuario' id='usuario' minLength='1' required/>
<br/><br/>
<input type='password' placeholder="Contraseña" name="password" id="password"  minLength='1' required/>
<div className="mt-3">
<button class="btn__register" type="summbit" id="liveAlertBtn">REGISTRARSE <i class='bx bx-right-arrow-alt' ></i> </button><br/>
</div>
<br/><p class="align-left">¿Ya tienes cuenta? <a href="/login"><b class="register_color">Log in </b></a></p><br/>
</center>

</section>      
    )
}
export default RegisterComponent;


