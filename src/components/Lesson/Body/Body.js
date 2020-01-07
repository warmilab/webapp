import React from "react"

import './Body.scss';

const Body = ({frontmatter, html}) => (
  <div className="row">
    <div className="col-12">
      <h2>Descripción</h2>
      <p>{frontmatter.description}</p>
    </div>
    <div className="col-12 lesson-body" dangerouslySetInnerHTML={{
        __html: html
      }}/>
  </div>
)

export default Body
