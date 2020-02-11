import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Authors = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Auteurs" />
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

export default Authors

export const allAuthorsQuery = graphql`
  query allAuthorsQuery {
    allAirtable(filter: { table: { eq: "authors" } }) {
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
