import React from "react"
import GroupByLetter from "./group-letter"
import ListItem from "./list-item"
import { azRange } from "../utils/utils"
import { sortListByFirstCharacter } from "../utils/structure-data"

const List = ({ edges, origin, location }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, origin, azRange)

  return (
    <div>
      <p className="text-3xl pt-2 pl-2 pb-4">READONLYMEMORY</p>
      {/* Display names matching the given range */}
      {azRange.map(letter => (
        <GroupByLetter
          list={sortedList.normal}
          letter={letter}
          key={letter}
          location={location}
        />
      ))}
      {/* Display names starting with special characters */}
      <div id="#" className="filtered-group">
        {sortedList.special.map((item, location) => {
          return <ListItem item={item} location={location} />
        })}
      </div>
    </div>
  )
}

export default List
