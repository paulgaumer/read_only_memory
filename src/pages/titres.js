import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/lists/list"

const Titles = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="Titres" />
      <List edges={edges} page={"titles"} location={location} />
    </Layout>
  )
}

export default Titles

export const allTitlesQuery = graphql`
  query allTitlesQuery {
    allAirtable(
      filter: { table: { eq: "titles" } }
      sort: { fields: data___name }
    ) {
      edges {
        node {
          id
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
