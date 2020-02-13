import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list"

const Authors = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Auteurs" />
      <List edges={edges} />
    </Layout>
  )
}

export default Authors

export const allAuthorsQuery = graphql`
  query allAuthorsQuery {
    allAirtable(
      filter: { table: { eq: "authors" } }
      sort: { fields: data___name }
    ) {
      edges {
        node {
          data {
            name
            titles {
              data {
                name
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
    }
  }
`
