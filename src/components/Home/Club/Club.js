import React from "react"

import {Link} from "gatsby"

import friends from '../../../images/club/friends.png';

const Club = () => {


  return (<section id="club" className="purple-bg">
    <div className="container text-center">

        <div className="row">
          <div className="col">
            <img src={friends} alt="Niñas" width="500"/>
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="col" style={{maxWidth:'680px'}}>
            <h1 className="cursive" style={{color: 'white', fontSize: '40.5px'}}>Club WarmiLab</h1>

            <p style={{color: 'white'}}>
              ¡Ahora puedes abrir un Club WarmiLab en tu ciudad! <br/><br/>
              El Club WarmiLab nace con la finalidad de democratizar nuestros talleres y facilitar su
              acceso rompiendo barreras geográficas y de conocimiento previo técnico.
              Entérate más <Link to="/club/info" style={{color:'white'}}> aquí.</Link>
            </p>
            <p style={{color: 'white'}}>
              Nuestra experiencia con más de 20 talleres realizados en ciudades como
              Lima, Cusco y Chiclayo la ponemos a disposición para que pueda ser replicado.<br/>
              Revisa nuestros materiales <Link to="/club" style={{color:'white'}}> aquí.</Link>
            </p>
          </div>
        </div>
    </div>

  </section>)
}

export default Club;
