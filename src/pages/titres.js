import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FilteredGroup from "../components/filtered-group"
import {
  azRange,
  filterListByCharacterType,
  sanitizeSlug,
  capitalize,
} from "../utils/utils"

const Titles = ({ data }) => {
  const { edges } = data.allAirtable
  const filteredList = filterListByCharacterType(edges, azRange)

  return (
    <Layout>
      <SEO title="Titres" />
      <div>
        {azRange.map(letter => (
          <FilteredGroup
            list={filteredList.normal}
            character={letter}
            category="titles"
          />
        ))}
        <div id="#" class="filtered-group">
          {filteredList.special.map(title => {
            return (
              <ul>
                <li>
                  <Link to={`titres/${sanitizeSlug(title.slug)}`}>
                    {capitalize(title.name)}
                  </Link>
                </li>
              </ul>
            )
          })}
        </div>
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
