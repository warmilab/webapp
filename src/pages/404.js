import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"

import girl from '../images/girl-coffee.jpg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm text-center">
            <img src={girl} alt="Coding girl with coffee" />
          </div>
          <div className="col-sm mt-3">
            <h2>¡Oh no!</h2>
            <p>Parece que no tenemos los que buscas. Pero no te preocupes. Puedes
              tomar una taza de café mientras lo solucionamos o <Link to="/">¿regresamos al Home?</Link>: </p>
          </div>
        </div>
      </div>

  </Layout>
)

export default NotFoundPage
