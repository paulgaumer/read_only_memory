import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/lists/list"

const Authors = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="Auteurs" />
      <List edges={edges} page={"authors"} location={location} />
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
