// ******
// This file acts as the original gatsby-node but uses the esm package allowing ES6 features such as "import"
// ******

import { sanitizeSlug } from "./src/utils/utils"
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
    const sanitizedSlug = sanitizeSlug(node.data.slug)
    createPage({
      path: `/titres/${sanitizedSlug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: sanitizedSlug,
        id: node.id,
      },
    })
  })
}
