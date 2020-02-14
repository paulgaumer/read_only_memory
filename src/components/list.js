import React from "react"
import { Link } from "gatsby"
import GroupByLetter from "./filtered-group"
import { azRange, capitalize, sanitizeSlug } from "../utils/utils"
import { sortListByFirstCharacter } from "../utils/structure-data"

const List = ({ edges, origin }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, origin, azRange)

  return (
    <div>
      {/* Display names matching the given range */}
      {azRange.map(letter => (
        <GroupByLetter list={sortedList.normal} letter={letter} key={letter} />
      ))}
      {/* Display names starting with special characters */}
      <div id="#" className="filtered-group">
        <ul>
          {sortedList.special.map((title, i) => {
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
