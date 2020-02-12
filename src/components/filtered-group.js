import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../utils/utils"

const FilteredGroup = ({ character, list }) => {
  const char = character
  return (
    <div id={char}>
      <ul>
        {list.map(({ node }) => {
          if (
            node.data.name !== null &&
            node.data.name.toLowerCase().charAt(0) === char
          ) {
            return (
              <li>
                <Link to={`titres/${sanitizeSlug(node.data.slug)}`}>
                  {capitalize(node.data.name)}
                </Link>
              </li>
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}

export default FilteredGroup
