import PropTypes from "prop-types"
import React from "react"

import program1 from '../../../images/programs/programa1.png';
import program2 from '../../../images/programs/programa2.png';
import program3 from '../../../images/programs/programa3.png';

import './Programs.scss';

const data = [
  {
    name: "Charlas",
    description: "Es un espacio donde nuestras embajadoras comparten sus experiencias y responden inquietudes. De esta manera las niñas puedan verse a sí mismas como futuras ingenieras y formar una red de contacto con las expositoras.",
    image: program1,
  },
  {
    name: "Bootcamps",
    description: "Se aprende a programar a través del desarrollo de videojuegos, páginas web, aplicaciones móviles y mucho más. La duración de los talleres puede variar entre un fin de semana hasta entre 2 y 3 meses.",
    image: program2,
  },
  {
    name: "Workshops",
    description: "Se trabaja en equipo para diseñar y construir (a través del código) un proyecto de impacto orientado a un problema social de interés común. Estos proyectos tienen un modelo de negocio que les permite ser escalables a través del tiempo.",
    image: program3,
  }
]

const Programs = ({ siteTitle }) => (
  <section id="programs">
    <div className="container">

    <h1 className="section-title">Programas</h1>
    {
      data.map((item) => (<div className="spotlight">
        <div className="image">
          <img src={item.image} alt={item.name}/></div>
        <div className="content">
          <h3 className="cursive">{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>))
    }

    </div>
  </section>
)


export default Programs
