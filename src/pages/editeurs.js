import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Editors = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Editeurs" />
      <div>
        <ul>
          {edges.map(({ node }) => {
            // console.log(node.data.authors)
            return <li>{node.data.name}</li>
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Editors

export const allEditorsQuery = graphql`
  query allEditorsQuery {
    allAirtable(filter: { table: { eq: "editors" } }) {
      edges {
        node {
          data {
            name
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
