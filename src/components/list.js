import React from "react"
import { Link } from "gatsby"
import FilteredGroup from "./filtered-group"
import { azRange, capitalize, sanitizeSlug } from "../utils/utils"
import { filterListByCharacterType } from "../utils/structure-data"

const List = ({ edges, origin }) => {
  // Filter the list to separate names starting with special character

  const filteredList = filterListByCharacterType(edges, origin, azRange)

  return (
    <div>
      {/* Display names matching the given range */}
      {azRange.map(letter => (
        <FilteredGroup
          list={filteredList.normal}
          letter={letter}
          key={letter}
        />
      ))}
      {/* Display names starting with special characters */}
      <div id="#" className="filtered-group">
        <ul>
          {filteredList.special.map((title, i) => {
            return title.slug ? (
              <Link to={`/titre/${sanitizeSlug(title.slug)}`} key={i}>
                <li>{capitalize(title.name)}</li>
              </Link>
            ) : (
              <li key={i}>{capitalize(title.name)}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default List
