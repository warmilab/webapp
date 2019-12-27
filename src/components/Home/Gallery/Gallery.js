import {useStaticQuery, graphql} from "gatsby"
import React from "react"
import Img from "gatsby-image"

import './Gallery.scss';

const Gallery = () => {
  const data = useStaticQuery(graphql `
    query GalleryQuery {
      allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
        edges {
          node {
            childImageSharp {
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (<section id="gallery">
    <div className="container">

      <h1 className="section-title">Galería</h1>

      <div className="container">
        <div className="row">
          {
            data.allFile.edges.map((image, key) => <div class="col">
              <Img fluid={image.node.childImageSharp.fixed} className="gallery-img" key={key}/>
            </div>)
          }
        </div>
      </div>
    </div>

  </section>)
}

export default Gallery;
