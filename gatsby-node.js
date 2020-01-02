const path = require('path');
const {
  createFilePath
} = require('gatsby-source-filesystem');

exports.onCreateNode = ({
  node,
  getNode,
  actions
}) => {
  const {
    createNodeField
  } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({
  actions,
  graphql,
  reporter
}) => {
  const {
    createPage
  } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {fileAbsolutePath: {regex: "/(blog)/"}}
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (blogResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogResult.data.allMarkdownRemark.edges.forEach(({
    node
  }) => {
    createPage({
      path: `blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      }, // additional data can be passed via context
    })
  })

  // Club's guide page creation
  const clubGuideTemplate = path.resolve(`src/templates/clubGuideTemplate.js`)
  const clubResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000,
        filter: {fileAbsolutePath: {regex: "/(club)/"}}
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (clubResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  clubResult.data.allMarkdownRemark.edges.forEach(({
    node
  }) => {
    createPage({
      path: `club${node.fields.slug}`,
      component: clubGuideTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });



  //[To-Do] Make reusable
  //Programming Concepts - Fundamentals
  const fundamentalsTemplate = path.resolve(`src/templates/fundamentals.js`)

  createPage({
    path: '/club/guide/teaching-code-for-beginners/programming-concepts',
    component: fundamentalsTemplate,
    context: {}, // additional data can be passed via context
  });


}
