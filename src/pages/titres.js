import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { sanitizeSlug } from "../utils/utils"

const Titles = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Titres" />
      <div>
        <ul>
          {edges.map(({ node }) => {
            return (
              <Link to={`titres/${sanitizeSlug(node.data.slug)}`}>
                <li>{node.data.name}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Titles

export const allTitlesQuery = graphql`
  query allTitlesQuery {
    allAirtable(filter: { table: { eq: "titles" } }) {
      edges {
        node {
          data {
            name
            slug
            authors {
              data {
                name
              }
            }
            editors {
              data {
                name
              }
            }
            collections {
              data {
                name
              }
            }
          }
        }
      }
    }
  }
`
