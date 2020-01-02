import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Blog/Footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  debugger;
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark
  const { siteMetadata }  = site

  return (
    <Layout>
      <SEO title={frontmatter.title} />
        <div className="blog-post-container"
          style={{
            margin: `0 auto`,
            maxWidth: 680,
            padding: `10px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <div className="blog-post">
            <h1 className="blog-heading">{frontmatter.title}</h1>
            <h2 className="blog-subheading">{frontmatter.description}</h2>

            <div style={{display: 'flex'}}  className="mb-4">
              <div style={{display: 'flex', width:'100%'}}>
                <div>
                  <i className="fa fa-user fa-2x"></i>
                </div>
                <div className="ml-3">
                  <div className="cursive">{frontmatter.author}</div>
                  <span style={{color: '#777'}}>{frontmatter.date}</span>
                </div>
              </div>
              <div style={{display: 'flex', alignItems:'flex-end'}} className="ml-3">
                <a href={`https://twitter.com/intent/tweet?text=${frontmatter.title}&url=${siteMetadata.url}/blog${fields.slug}&hashtags=WarmiLab,engineering`}
                  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter mr-2"></i>
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${siteMetadata.url}/blog${fields.slug}`}
                  target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook mr-2"></i>
                </a>
              </div>
            </div>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {
            fields.slug === '/info/' ? '': <Footer />
          }

        </div>
    </Layout>
  )
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        description
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`;
