import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/Home/Blog"
import Team from "../components/Home/Team"
import Gallery from "../components/Home/Gallery"
import Programs from "../components/Home/Programs"
import Importance from "../components/Home/Importance"
import About from "../components/Home/About"
import Club from "../components/Home/Club"
import Newsletter from "../components/Home/Newsletter"

import portada from '../images/portada.jpg';

const IndexPage = () => (<Layout>
  <SEO title="Home"/>

  <div className="text-center" style={{backgroundColor:"#8a7dc1"}}>
    <img src={portada} alt="Portada WarmiLab" />
  </div>

  <About/>

  <Importance/>

  <Programs/>

  <Club/>

  <Gallery/>

  <Blog/>

  <Team/>

  <Newsletter/>


</Layout>)

export default IndexPage
