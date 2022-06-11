import React  from "react";
import '../Login.css'

let texth2 = ['LABURADOS', <b className="login__change__color"> MARKET</b>]



function TitleLogin () {
    return(
<section  id="login">
    <div className="container"></div>
<h2 className="login__title">{texth2}</h2>
</section> 
    )
}

export default TitleLogin;
