import React from 'react'

import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'

export default () => {
  return (
    <Layout>
      <Container>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfjl86YPQGnrJJbsnckDE_EDsgJvX79nO8l5Um86qRmzKzkbQ/viewform?embedded=true"
          width="100%"
          height="1631"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="auto"
        >
          Loading…
        </iframe>
      </Container>
    </Layout>
  )
}
