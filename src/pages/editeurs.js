import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import { azRange, filterListByCharacterType, capitalize } from "../utils/utils"

const Editors = ({ data }) => {
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
