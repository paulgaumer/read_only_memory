import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange } from "../utils/utils"

const Authors = ({ data }) => {
  const { edges } = data.allAirtable

  const list = edges.map(({ node }) => {
    return {
      name: node.data.name,
    }
  })

  return (
    <Layout>
      <SEO title="Auteurs" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup list={list} character={letter} />
        ))}
      </div>
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
