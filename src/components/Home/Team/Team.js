import React from "react"

import laura from '../../../images/team/laura.jpg';
import ursula from '../../../images/team/ursula.jpg';
import geraldine from '../../../images/team/geraldine.jpg';

import './Team.scss';

const Team = () => {

  return (
    <section id="team" className="gray-bg">
      <div className="container">

    <h1 className="section-title">Team</h1>
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="team-box">

          <img class="team-image" src={ursula} alt="Ursula Cervantes" />

          <div class="team-info">
            <span class="team-name">Ursula Cervantes</span>
            <span class="team-position">Co-founder</span>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="team-box">

          <img class="team-image" src={laura} alt="Laura Ponce" />

          <div class="team-info">
            <span class="team-name">Laura Ponce</span>
            <span class="team-position">Co-founder</span>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="team-box">

          <img class="team-image" src={geraldine} alt="Geraldine Francia" />

          <div class="team-info">
            <span class="team-name">Geraldine Francia</span>
            <span class="team-position">Volunteer Director</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  </section>)

}

export default Team
