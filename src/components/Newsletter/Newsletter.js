import React, { useState } from "react"
import PropTypes from "prop-types"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import ninaLaptop from '../../images/girl-laptop.jpg';

import './Newsletter.scss';

const Newsletter = ({ title, text, url }) => {

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const initialLabelState = {
    name: '',
    lastname: '',
    email: '',
  };
  const [label, setLabel] = useState(initialLabelState);

  const initialAlertState = {
    type: '',
    show: '',
    title: '',
    text: '',
  };
  const [alert, setAlert] = useState(initialAlertState);

  function setActiveLabel(e) {
    setLabel({
      name: name !== '' ? '--minimized' : '',
      lastname: lastname !== '' ? '--minimized' : '',
      email: email !== '' ? '--minimized' : '',
      [e.target.name]: '--minimized',
    })

  };

  function handleSubmit(e){
    e.preventDefault();
    setAlert({
      ...alert,
      show: ''
    });

    addToMailchimp(
      email,
      {
        FNAME: name,
        LNAME: lastname,
      },
      url
    ).then(data => {
      setName('')
      setLastname('')
      setEmail('')
      setLabel(initialLabelState)

      setAlert({
        type: data.result === 'error' ? 'warning':'success',
        show: 'show',
        title: data.result === 'error' ? '¡Oh no!':'¡Bienvenido!',
        text: data.msg,
      })
    })
    .catch(() => {
      setAlert({
        type: 'dark',
        show: 'show',
        title: '¡Oops!',
        text: 'No hemos podido registrarte. ¿Estás seguro que tienes conexión a internet?',
      })
    })
  }

  function handleCloseAlert(){
    setAlert({
      ...alert,
      show: ''
    });
  }

  return (
    <form>
      <div className="container">
        <div className="row justify-content-center">
          <div className="newsletter-info col-sm col-lg-5">
            <img src={ninaLaptop} width="300" alt="Niña con laptop"/>
          </div>
          <div className="newsletter-info col-sm col-lg-5">
            <h2 className="cursive">{title}</h2>
            <p>{text}</p>
          </div>
        </div>
            <div className="row">
              <div className="col-sm mt-3">
                <div className="newsletter-input" onClick={(e)=>setActiveLabel(e)}>
                  <label htmlFor="name" className={label.name}>Nombre</label>
                  <input type="text" name="name" id="name" value={name}
                    onChange={(e)=>{setName(e.target.value); setActiveLabel(e) }}/>
                </div>
              </div>
              <div className="col-sm mt-3">
                <div className="newsletter-input" onClick={(e)=>setActiveLabel(e)}>
                  <label htmlFor="lastname" className={label.lastname}>Apellidos</label>
                  <input type="text" name="lastname" id="lastname" value={lastname}
                    onChange={(e)=>{setLastname(e.target.value); setActiveLabel(e)}}/>
                </div>
              </div>
              <div className="col-sm mt-3">
                <div className="newsletter-input" onClick={(e)=>setActiveLabel(e)}>
                  <label htmlFor="email" className={label.email}>Email</label>
                  <input type="email" name="email" id="email" value={email}
                    onChange={(e)=>{setEmail(e.target.value); setActiveLabel(e)}}/>
                </div>
              </div>
              <div className="col-sm mt-3">
                <div className="newsletter-submit">
                  <input type="submit" value="Suscribirse" onClick={(e)=>handleSubmit(e)}/>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className={`alert alert-${alert.type} alert-dismissible fade ${alert.show}`} role="alert">
                <strong>{alert.title}</strong> <div dangerouslySetInnerHTML={{ __html: alert.text }}></div>

                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>handleCloseAlert()}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
        </div>
      </div>
    </form>
)}

Newsletter.defaultProps = {
  title: 'Únete a la comunidad',
  text: `Únete como alumno, voluntario o sponsor y sé el primero en enterarte
  sobre los próximos eventos, recursos para aprender y ¡mucho más!`,
  url: 'https://warmilab.us12.list-manage.com/subscribe/post?u=5b3bfebc8abb7c1d1306ff894&amp;id=4f747eb855',
}

Newsletter.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
}

export default Newsletter
