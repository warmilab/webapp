import React, { useState } from 'react';

import foco from '../../../images/importance/foco2.png';
import cifra from '../../../images/importance/cifra2.png';
import maleta from '../../../images/importance/maleta2.png';
import nina from '../../../images/importance/nina2.png';

import './Importance.scss';

const list = [
  {
    title: 'Innovación',
    image: foco,
    status: 'active',
    id: 'innovation'
  }, {
    title: 'Representación',
    image: cifra,
    status: '',
    id: 'representation'
  }, {
    title: 'Empleo',
    image: maleta,
    status: '',
    id: 'employment'
  }, {
    title: 'Beneficios',
    image: nina,
    status: '',
    id: 'benefits'
  }
];

const detail = [
  {
    text: `Si la tecnología se diseña principalmente por el 50% de la población, en su mayoría hombres, estamos perdiendo las innovaciones que podrían aportar el otro 50 % de la población,
    que son las mujeres.`,
 status: 'active',
    id: 'innovation'
  }, {
    text: `Las mujeres representan el 18%
 de todos los graduados en Ciencias de la Computación.En 1984,
    representaban el 37 % `,
 status: '',
    id: 'representation'
  }, {
    text: `Para 2020 habrá más de 1.4 millones
 de oportunidades de empleo vinculadas a la computación.Sin embargo,
  solo podremos cubrir el 30% de esas vacantes.`,
 status: '',
    id: 'employment'
  }, {
    text: `Los empleos en computación están entre los que más aumentan y mejor pagan, por lo que
más mujeres deberían beneficiarse con esas ocupaciones.`,
 status: '',
    id: 'benefits'
  }
];


const Importance = () => {

  const [importanceList, setList] = useState(list);
  const [importanceDetail, setDetail] = useState(detail);

  const selectItem = (id, e) => {
      const temp1 = importanceList.map((item) => {
        if(item.id === id) {
          item.status = "active"
        }
        else {
          item.status = ""
        }
        return item;
      })

      setList(temp1);

      const temp2 = importanceDetail.map((item) => {
        if(item.id === id) {
          item.status = "active"
        }
        else {
          item.status = ""
        }
        return item;
      })

      setDetail(temp2);
e.preventDefault();
  }

  return (<section id="importance" className="gray-bg justify-content-center">
    <div className="container">

      <h1 className="section-title">¿Por qué es importante?</h1>

      <ul className="nav justify-content-center" role="tablist">
        {
          importanceList.map((item) => (<li className="nav-item">
            <a className={`nav-link ${item.status}`} onClick={(e) => selectItem(item.id, e)} href="" aria-controls={item.id} role="tab" data-toggle="tab" aria-expanded="true">
              <span className="icon-importance">
                <img className="small-icon foco" src={item.image}/></span>{item.title}
            </a>
          </li>))
        }
      </ul>

      <div className="tab-content">
        {
          importanceDetail.map((item) => (<div role="tabpanel" aria-labelledby="innovation-tab" className={`tab-pane fade show ${item.status}`} id={item.id}>
            <p>{item.text}</p>
          </div>))
        }
      </div>
    </div>

  </section>)
}

export default Importance
