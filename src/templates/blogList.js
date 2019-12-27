import React from 'react'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Layout } from '../containers/Layout';
import { BlogItem } from '../components/BlogItem';

export default ({ data }) => {
  const post = data.allMarkdownRemark
  return (
    <Layout>
      <Container>
        <Row className="mb-4 mt-5 justify-content-md-center">
            <div className="col-sm-12 text-center">
              {post.edges.map((item, key) => (
                <BlogItem post={item.node} key={key} />
              ))}
            </div>
        </Row>
      </Container>
    </Layout>
  )
}
