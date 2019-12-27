import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogItem from '../components/BlogItem';

const BlogPage = () => {
  const data = useStaticQuery(graphql `
    query BlogQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/(blog)/"  },
          frontmatter: {published: {eq: true}}
      }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              path
              cover {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const post = data.allMarkdownRemark;

  return (<Layout>
    <SEO title="Blog"/>
    <Container>
      <h1 className="section-heading">Blog</h1>
      <Row>
        {
          post.edges.map((item) => (<div class="col-sm">
            <BlogItem data={item.node.frontmatter}></BlogItem>
          </div>))
        }
      </Row>
    </Container>
  </Layout>)
}

export default BlogPage
