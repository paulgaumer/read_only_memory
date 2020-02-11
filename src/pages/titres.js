import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Titles = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Titres" />
      <div>
        <ul>
          {edges.map(({ node }) => {
            return <li>{node.data.name}</li>
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
