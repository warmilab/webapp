import React from "react"

import portada from '../../../images/club/friends.png';

const Header = () => (
  <div className="text-center mt-5">
    <img src={portada} alt="Club WarmiLab"/>
    <h1>Club Warmi<span className="light-text">Lab</span></h1>
  </div>
)

export default Header
