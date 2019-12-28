import React from "react"

import Nav from 'react-bootstrap/Nav';

import './Footer.scss';

const Footer = () => (<footer>
  <p className="cursive text-center">Síguenos</p>
  <Nav className="justify-content-center">
    <Nav.Item>
      <Nav.Link className="link" target="_blank" rel="noopener noreferrer" href="https://facebook.com/WarmiLab/">
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
        </span>

      </Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link className="link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/warmilab/">

        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
        </span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/warmilab">
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
        </span>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/warmilab">
        <span className="fa-stack">
          <i className="fa fa-circle fa-stack-2x"></i>
          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
        </span>
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <p className="text-center mt-4 mb-4">
    © {new Date().getFullYear()}
    WarmiLab - Built with ♡ by <a href="https://www.ursuland.com">Ursula</a>
  </p>
</footer>)

export default Footer
