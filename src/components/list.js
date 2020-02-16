import React from "react"
import GroupByLetter from "./group-letter"
import ListItem from "./list-item"
import { azRange, categoryToFrench } from "../utils/utils"
import { sortListByFirstCharacter } from "../utils/structure-data"

const List = ({ edges, page }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, page, azRange)

  return (
    <div>
      {/* Title showing only on mobile */}
      <p className="md:hidden text-3xl pt-2 pl-4 pb-4 uppercase">
        {categoryToFrench(page).slice(0, -1)}
      </p>
      {/* Display names matching the given range */}
      {azRange.map(letter => (
        <GroupByLetter
          list={sortedList.normal}
          letter={letter}
          key={letter}
          page={page}
        />
      ))}
      {/* Display names starting with special characters */}
      <div id="#" className="filtered-group">
        {sortedList.special.map(item => {
          return <ListItem item={item} page={page} />
        })}
      </div>
    </div>
  )
}

export default List
