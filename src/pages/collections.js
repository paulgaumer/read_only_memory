import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"

const Collections = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="Collections" />
      <List edges={edges} origin={"collections"} location={location} />
    </Layout>
  )
}

export default Collections

export const allCollectionsQuery = graphql`
  query allCollectionsQuery {
    allAirtable(filter: { table: { eq: "collections" } }) {
      edges {
        node {
          data {
            name
            editors {
              data {
                name
              }
            }
            titles {
              data {
                name
                authors {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
