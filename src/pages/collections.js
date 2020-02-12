import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange } from "../utils/utils"

const Collections = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Collections" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup list={edges} character={letter} />
        ))}
      </div>
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
