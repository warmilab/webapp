import React from "react"

import './Info.scss';

const Info = ({frontmatter}) => (
  <div className="row sub-info-list-wrapper">
    <div className="col-sm">
      <span className="sub-info-title">Nivel</span>
      <span className="sub-info">{frontmatter.level}</span>
    </div>
    <div className="col-sm">
      <span className="sub-info-title">Edades</span>
      <span className="sub-info">{frontmatter.ages}</span>
    </div>
    <div className="col-sm">
      <span className="sub-info-title">Duración</span>
      <span className="sub-info">{frontmatter.duration}</span>
    </div>
  </div>
)

export default Info
