import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Card from 'react-bootstrap/Card';
import SEO from "../components/seo"

import portada from '../images/club/friends.png';
import grupo12 from '../images/club/grupo12-14.jpg';
import grupo15 from '../images/club/grupo15-17.jpg';
import fundamentos from '../images/club/fundamentos.jpg';
import voluntarios from '../images/club/voluntarios.jpg';

import ninaLaptop from '../images/club/nina-con-laptop.jpg';

const ClubPage = () => (
  <Layout>
    <SEO title="Club" />
    <div className="container mt-5" style={{maxWidth:'720px'}}>

      <div className="text-center">
        <img src={portada} alt="Club WarmiLab"/>
      </div>

      <div className="row mt-3" >
        <div className="col text-center">
          <h1>Club Warmi<span class="light-text">Lab</span></h1>

          <p>Creemos que todos los profesores y voluntarios pueden enseñar a programar.</p>
          <p>
            El club está diseñado para ayudar a los profesores y voluntarios con
            poca o ninguna experiencia enseñando fundamendos de programación a
            hacerlo con confianza.
          </p>
          <p>
            <span className="purple-text">¡Warmilab es una comunidad!</span> Creemos en el poder de la colaboración
            para amplificar nuestro impacto. Como parte del <em>Club WarmiLab</em> te
            invitamos a unirte  a un ambiente seguro, de apoyo, con experiencia
            en la ejecución de talleres y de modelos a seguir donde las niñas
            aprenden a verse a sí mismas como ingenieras y observan de cerca a
            otras mujeres en el campo de ingeniería.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm">
          <img src={ninaLaptop}/>
        </div>
        <div className="col-sm">
          <h2>Regístrate a un Club</h2>
          <p>
            Te recomendamos buscar un club cerca de donde vives y registrarte
            para poder participar. Nuestros clubs son buenos espacios para
            aprender algo nuevo, conocer nuevas personas y futuros mentores.
          </p>
          <Link className="button">Registrarse</Link>
        </div>
      </div>


      <div className="row justify-content-center mt-5">
        <h1 className=" text-center">Materiales</h1>
      </div>
      <div className="row justify-content-center mt-3">
        <h2>Talleres</h2>
      </div>

      <div className="row">
        <div className="col-sm">
          <Card>
            <Card.Img variant="top" src={grupo12} />
            <Card.Body>
              <Card.Title>12 - 14 años</Card.Title>
              <Card.Text>
                Talleres diseñados para niñas de entre 12 y 14 años <br/><br/>
                <Link>Ver más</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card>
            <Card.Img variant="top" src={grupo15} />
            <Card.Body>
              <Card.Title>15 - 17 años</Card.Title>
              <Card.Text>
                Talleres diseñados para niñas de entre 15 y 17 años <br/><br/>
                <Link>Ver más</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <h2>Voluntarios</h2>
      </div>

      <div className="row">
        <div className="col-sm">
          <Card>
            <Card.Img variant="top" src={fundamentos} />
            <Card.Body>
              <Card.Title>Conceptos de programación</Card.Title>
              <Card.Text>
                Existen muchos tipos de lenguajes de programación y aunque no
                encontremos muchas similitudes a simple vista, los fundamentos
                son los mismos. <br/><br/>
                <Link>Ver más</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card>
            <Card.Img variant="top" src={voluntarios} />
            <Card.Body>
              <Card.Title>Guía de voluntarios</Card.Title>
              <Card.Text>
                Hemos recopilado nuestras experiencias enseñando diversos talleres
                alrededor del país. Revisa nuestros tips para comenzar un club y
                dictar talleres. <br/><br/>
                <Link>Ver más</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div >


  </Layout>
)

export default ClubPage
