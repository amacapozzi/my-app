import React from "react";
import ButtonEmp from "./Button";
import NabVar from "./Navbar";


let imgsvg = './imagen.svg'
let derechos = 'Student'
let titlemain = ['Laburados market, servicios de alta calidad y ', <br/>, 'mejores', <b className='titulo__rojo'> precios</b>]

function Home () {
    return (
  
      <div className='App' id='home_id'>
    <header>
      <div>
        <p className='logo'> LABU<b className='normal__opacity'>RADOS</b><b className='medium__opacity'>MAR</b><b className='plus__opacity'>KET</b></p>
        <p className='subtitle'>{derechos}</p>
      </div>
      <NabVar/>
      </header>
      <img class="change__imagen" src={imgsvg} alt=""></img>
      <section className='button__and__title'>
        <div className='ind'>
        <h2 className='one__title'>{titlemain}</h2>
      
        <ButtonEmp/>
        </div>
      </section>

      </div>
     
    )
}

export default Home