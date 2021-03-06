import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/lists/list"

const Collections = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="Collections" />
      <List edges={edges} page={"collections"} location={location} />
    </Layout>
  )
}

export default Collections

export const allCollectionsQuery = graphql`
  query allCollectionsQuery {
    allAirtable(filter: { table: { eq: "collections" } }) {
      edges {
        node {
          id
          data {
            name
            titles {
              data {
                slug
                name
                editors {
                  data {
                    name
                  }
                }
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
