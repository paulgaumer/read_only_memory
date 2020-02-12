import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange } from "../utils/utils"

const Editors = ({ data }) => {
  const { edges } = data.allAirtable
  const list = edges.map(({ node }) => {
    return {
      name: node.data.name,
    }
  })

  console.log(list)

  return (
    <Layout>
      <SEO title="Editeurs" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup list={list} character={letter} />
        ))}
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
