import React from "react"
import {useStaticQuery, graphql} from 'gatsby'
import { Link } from "gatsby"

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout"
import SEO from "../components/seo"

const LessonPage = () => {
  const data = useStaticQuery(graphql `
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/(content/lessons)/"  },
          frontmatter: {published: {eq: true}}
      }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              duration
              level
              ages
              subjects
              cover{
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const lessons = data.allMarkdownRemark;

  return (<Layout>
    <SEO title="Talleres"/>
    <Container>
      <h1 className="section-heading">Talleres</h1>
      <Row>
        {
          lessons.edges.map((item) => (<div class="col-4">
            <Card>
              <Card.Img variant="top" src={item.node.frontmatter.cover.childImageSharp.fluid.src} />
              <Card.Body>
                <Card.Title>
                  <Link to={`lesson/${item.node.fields.slug}`}>
                    {item.node.frontmatter.title}
                  </Link>
                </Card.Title>
                <Card.Text>
                  {item.node.frontmatter.ages}<br/>
                  {item.node.frontmatter.level}<br/>
                  Duración: {item.node.frontmatter.duration}<br/><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>))
        }
      </Row>
    </Container>
  </Layout>)
}

export default LessonPage
