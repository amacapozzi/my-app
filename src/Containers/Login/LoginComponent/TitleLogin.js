import React  from "react";
import '../Login.css'

let texth2 = ['LABURADOS', <b className="login__change__color"> MARKET</b>]


function TitleLogin () {
    return(
        <div>
    <div className="container"></div>
<h2 className="login__title">{texth2}</h2>
</div>

    )
}

export default TitleLogin;
