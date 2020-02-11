const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allAirtable(filter: { table: { eq: "titles" } }) {
        edges {
          node {
            id
            data {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allAirtable.edges.forEach(({ node }) => {
    createPage({
      path: `/titres/${node.data.slug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: node.data.slug,
        id: node.id,
      },
    })
  })
}
