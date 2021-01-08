import React from 'react'

import laura from '../../../images/team/laura.jpg'
import ursula from '../../../images/team/ursula.jpg'
import geraldine from '../../../images/team/geraldine.jpg'
import lucho from '../../../images/team/lucho.jpg'
import paola from '../../../images/team/paola.jpg'
import liz from '../../../images/team/liz.jpg'
// https://www.linkedin.com/in/luis-ernesto-ponce-contreras-b0a388ab
import './Team.scss'

const Team = () => {
  return (
    <section id="team" className="gray-bg">
      <div className="container">
        <h1 className="section-title">Team</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="team-box">
                <img
                  className="team-image"
                  src={ursula}
                  alt="Ursula Cervantes"
                />

                <div className="team-info">
                  <span className="team-name">Ursula Cervantes</span>
                  <span className="team-position">Co-founder</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-box">
                <img className="team-image" src={laura} alt="Laura Ponce" />

                <div className="team-info">
                  <span className="team-name">Laura Ponce</span>
                  <span className="team-position">Co-founder</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-box">
                <img
                  className="team-image"
                  src={geraldine}
                  alt="Geraldine Francia"
                />

                <div className="team-info">
                  <span className="team-name">Geraldine Francia</span>
                  <span className="team-position">Volunteer Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="team-box">
                <img className="team-image" src={paola} alt="Paola Casabona" />

                <div className="team-info">
                  <span className="team-name">Paola Casabona</span>
                  <span className="team-position">Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-box">
                <img className="team-image" src={lucho} alt="Luis Ponce" />

                <div className="team-info">
                  <span className="team-name">Luis Ponce</span>
                  <span className="team-position">Volunteer</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="team-box">
                <img className="team-image" src={liz} alt="Lizbeth Mamani" />

                <div className="team-info">
                  <span className="team-name">Lizbeth Mamani</span>
                  <span className="team-position">Volunteer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
