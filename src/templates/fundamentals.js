import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default ({ data }) => {
  const {edges} = data.allFundamentalsJson
  const {concepts} = edges[0].node

  return (
    <Layout>
      <Container>
        <Row className="mb-5 mt-5 justify-content-md-center">
          <div className="text-center" style={{maxWidth:'680px'}}>
            <h1>Conceptos de Programación</h1>

            <p>
              Existen muchos tipos de lenguajes de programación y aunque no
              encontremos muchas similitudes a simple vista, los fundamentos
              son los mismos.
            </p>

            <p>
              Los siguientes conceptos son los fundamentales para interactuar con
              una computadora. Además, estaremos usando <a href="https://code.org" target="_blank">
              Code.org</a>, <a href="https://thimble.mozilla.org" target="_blank">
              Mozilla Thimble</a>, <a href="https://scratch.mit.edu" target="_blank">
              Scratch</a>, y otras herramientas para enseñar estos conceptos a
              los niños de una forma divertida y práctica.
            </p>

          </div>
        </Row>

        <Row className="mb-4 mt-5 justify-content-md-center">
              {concepts.map((item, key) => (
                <div className="col mb-3">
                  <Card bg="light" style={{ width: '18rem', minHeight: '18rem' }}>
                    <Card.Body style={{margin:'3rem 0 3rem'}}>
                      <Card.Title className="purple-text">{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
        </Row>
      </Container>
    </Layout>
  )
}


export const fundamentalsQuery = graphql`
  query {
    allFundamentalsJson {
      edges {
        node {
          concepts {
            title
            text
          }
        }
      }
    }
  }
`;
