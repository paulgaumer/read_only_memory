import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/lists/list"

const Editors = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="Editeurs" />
      <List edges={edges} page={"editors"} location={location} />
    </Layout>
  )
}

export default Editors

export const allEditorsQuery = graphql`
  query allEditorsQuery {
    allAirtable(filter: { table: { eq: "editors" } }) {
      edges {
        node {
          id
          data {
            name
            titles {
              data {
                slug
                name
                authors {
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
