import React from "react"

import './Header.scss';

const Header = ({frontmatter}) => (
  <div className="title-wrapper">
    <div className="container">
      <h1 className="title">{frontmatter.title}</h1>
      <span className="author">por {frontmatter.author}</span>
    </div>
  </div>
)

export default Header
