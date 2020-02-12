import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange } from "../utils/utils"

const Titles = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="Titres" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup list={edges} character={letter} category="titles" />
        ))}
      </div>
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
