import React  from "react";
import  ButtonSend from '../components/ButtonSend';



function Dashboard () {
    return (
        <section id="dashboard">
            
            <center>
            <input placeholder="Ingrese usuario de ig"></input>
            <br/>
            
            <ButtonSend/>
            
            </center>
        </section>
    )
}

export default Dashboard