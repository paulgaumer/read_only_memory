import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange, filterListByCharacterType, capitalize } from "../utils/utils"

const Authors = ({ data }) => {
  const { edges } = data.allAirtable
  const filteredList = filterListByCharacterType(edges, azRange)

  return (
    <Layout>
      <SEO title="Auteurs" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup list={filteredList.normal} character={letter} />
        ))}
        <div id="#" class="filtered-group">
          {filteredList.special.map(title => {
            return (
              <ul>
                <li>{capitalize(title.name)}</li>
              </ul>
            )
          })}
        </div>
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
