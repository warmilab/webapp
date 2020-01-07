import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Lesson/Header"
import Body from "../components/Lesson/Body"
import Info from "../components/Lesson/Info"
import Sidebar from "../components/Lesson/Sidebar"


export default function LessonTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark

  return (<Layout>
    <SEO title={frontmatter.title}/>
    <div className="lesson-header">

      <Header frontmatter={frontmatter} />

      <div className="container">
        <div className="row lesson-direction-rtl">
          <div className="col-lg-4 lesson-sidebar lesson-direction-ltr">

            <Sidebar frontmatter={frontmatter} />

          </div>
          <div className="col-lg-8 lesson-info lesson-direction-ltr">

            <Info frontmatter={frontmatter} />
            <Body frontmatter={frontmatter} html={html}/>

          </div>
        </div>
      </div>

    </div>
  </Layout>)
};
export const pageQuery = graphql ` query {
      markdownRemark(fileAbsolutePath : {
        regex: "/(content/lessons)/"
      }) {
        html
        frontmatter {
          author
          date
          duration
          description
          title
          slides
          level
          ages
          subjects
          keywords
          published
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
    `;
