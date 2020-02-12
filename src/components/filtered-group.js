import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../utils/utils"

const ListItemLink = ({ slug, name }) => {
  return (
    <li>
      <Link to={`titres/${sanitizeSlug(slug)}`}>{capitalize(name)}</Link>
    </li>
  )
}

const ListItem = ({ name }) => {
  return <li>{capitalize(name)}</li>
}

const FilteredGroup = ({ character, list, category }) => {
  const char = character

  return (
    <div id={char} class="filtered-group">
      <ul>
        {list.map(({ node }) => {
          if (
            node.data.name !== null &&
            node.data.name.toLowerCase().charAt(0) === char
          ) {
            return category === "titles" ? (
              <ListItemLink slug={node.data.slug} name={node.data.name} />
            ) : (
              <ListItem name={node.data.name} />
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}

export default FilteredGroup
