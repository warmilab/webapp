import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Club/Footer"
import Header from "../components/Club/Header"
import Newsletter from "../components/Newsletter"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, fields } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
        <div className="mb-5"
          style={{
            margin: `0 auto`,
            maxWidth: 720,
            padding: `10px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}>
          <div>
            <Header />

            <h1 className="text-center">{frontmatter.title}</h1>
            <h2>{frontmatter.description}</h2>

            <div
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {
            fields.slug === '/info/' ? '': <Footer />
          }
        </div>
        <Newsletter
          title= "Únete a los voluntarios"
          text = "Únete como voluntario y entérate de los próximos talleres en los que puedes participar."
          url  = "https://warmilab.us12.list-manage.com/subscribe/post?u=5b3bfebc8abb7c1d1306ff894&amp;id=45df64e6ba" />
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
        title
        author
        description
      }
    }
  }
`;
