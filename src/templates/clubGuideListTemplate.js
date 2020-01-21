import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/Club/Header'

import nina from '../images/club/nina3.png'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Club Guide" />
      <div
        className="mt-5 mb-3"
        style={{
          margin: `0 auto`,
          maxWidth: 720,
          padding: `10px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <div>
          <h1>Guía de Voluntarios</h1>

          <div>
            <div className="row">
              <div className="col-4">
                <img src={nina} alt="Niña sonriendo" width="150" />
              </div>
              <div className="col-8">
                <p>
                  Hemos recopilado nuestras experiencias enseñando diversos
                  talleres alrededor del país. Revisa nuestras guías y tips para
                  comenzar un club y dictar talleres.
                </p>
                <p>
                  Nuestras guías y <i>coding challenges</i> están diseñados para
                  niñas de entre 12 y 17 años.
                </p>
              </div>
            </div>
          </div>

          <h2>Tabla de contenidos</h2>
          <h3>Plan de clases</h3>
          <ul>
            {allMarkdownRemark.edges
              .filter(item =>
                item.node.fields.slug.startsWith('/guide/lesson-planning/')
              )
              .map(item => (
                <li key={item.node.fields.slug}>
                  <Link to={`club${item.node.fields.slug}`}>
                    {item.node.frontmatter.title}
                  </Link>
                </li>
              ))}
          </ul>
          <h3>Enseñar a programar para principiantes</h3>
          <ul>
            {allMarkdownRemark.edges
              .filter(item =>
                item.node.fields.slug.startsWith(
                  '/guide/teaching-code-for-beginners/'
                )
              )
              .map(item => (
                <li key={item.node.fields.slug}>
                  <Link to={`club${item.node.fields.slug}`}>
                    {item.node.frontmatter.title}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="club/guide/teaching-code-for-beginners/programming-concepts">
                Conceptos de programación
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(club/guide)/" }
        frontmatter: { published: { eq: true } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
