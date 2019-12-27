import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './Header.scss';

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" className="header">
    <Container>
      <Link to="/">
        <Navbar.Brand>
          <div className="logo"></div>
        </Navbar.Brand>
      </Link>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Link as="li"><Link to="/club/info">Club</Link></Nav.Link>
        <Nav.Link as="li"><Link to="/blog">Blog</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
