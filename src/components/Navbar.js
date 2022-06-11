import React from "react";


let contactref = 'https://discord.gg/htePcqkNJ7'


function NabVar () {
    return(
    <nav className="navbar_derecha">
        <ul className="nav__list">
        <li class="list__links"><a href="/login">LOGIN</a></li>
            <li class="list__links"><a href="/register">REGISTER</a></li>
            <li class="list__links"><a href={contactref} target='blank'>CONTACTO</a></li>
        </ul>
    </nav>
    )
}

export default NabVar