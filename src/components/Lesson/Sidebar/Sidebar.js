import React from "react"

import './Sidebar.scss';

const Sidebar = ({frontmatter}) => (
  <>
    <div className="col-sm-12 sidebar-card">
      <img className="sidebar-image" src={frontmatter.cover.childImageSharp.fluid.src} alt=""/>
      <a href={frontmatter.slides}
         download=""
         className="button mb-3">
        Ver Diapositivas
      </a>

    </div>
    <div className="col-sm-12 sidebar-content-wrapper">

      <h4>Conceptos Clave</h4>
      <ul>
        {frontmatter.keywords.map((item) => (<li>{item}</li>))}
      </ul>

      <h4>Área de estudio</h4>

      <div>
        <ul>
          {frontmatter.subjects.map((item) => (<li>{item}</li>))}
        </ul>
      </div>

    </div>
  </>
)

export default Sidebar
