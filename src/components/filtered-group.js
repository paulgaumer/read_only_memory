import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../utils/utils"

// Component linking to a product page
const ListItemLink = ({ slug, name }) => {
  return (
    <li>
      <Link to={`/titres/${sanitizeSlug(slug)}`}>{capitalize(name)}</Link>
    </li>
  )
}

// Component only displaying text info
const ListItem = ({ name }) => {
  return <li>{capitalize(name)}</li>
}

const FilteredGroup = ({ letter, list }) => {
  return (
    <div id={letter} className="filtered-group">
      <ul>
        {list.map((title, i) => {
          if (
            title.name !== null &&
            title.name.toLowerCase().charAt(0) === letter
          ) {
            return title.slug ? (
              <ListItemLink slug={title.slug} name={title.name} key={i} />
            ) : (
              <ListItem name={title.name} key={i} />
            )
          }
          return null
        })}
      </ul>
    </div>
  )
}

export default FilteredGroup
