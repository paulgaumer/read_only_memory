import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../utils/utils"

const ListItemLink = ({ slug, name }) => {
  return (
    <li>
      <a href={`titres/${sanitizeSlug(slug)}`}>{capitalize(name)}</a>
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
        {list.map(title => {
          if (
            title.name !== null &&
            title.name.toLowerCase().charAt(0) === char
          ) {
            return category === "titles" ? (
              <ListItemLink slug={title.slug} name={title.name} />
            ) : (
              <ListItem name={title.name} />
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}

export default FilteredGroup
