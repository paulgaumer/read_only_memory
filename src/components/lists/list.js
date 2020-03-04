import React from "react"
import ListMobile from "./list-mobile"
import GroupByLetter from "./group-letter"
import ListItemTitles from "./list-item-titles"
import ListItemOthers from "./list-item-others"
import { azRange } from "../../utils/utils"
import { sortListByFirstCharacter } from "../../utils/structure-data"

const List = ({ edges, page, location }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, page, azRange)

  return (
    <>
      <div className="hidden md:block">
        {/* Display names matching the given range */}
        {azRange.map(letter => (
          <GroupByLetter
            list={sortedList.normal}
            letter={letter}
            key={letter}
            page={page}
            location={location}
          />
        ))}
        {/* Display names starting with special characters */}
        <div id="#" className="filtered-group">
          {sortedList.special.map(item => {
            return page === "titles" ? (
              <ListItemTitles
                item={item}
                page={page}
                key={item.id}
                location={location}
              />
            ) : (
              <ListItemOthers
                item={item}
                page={page}
                key={item.id}
                location={location}
              />
            )
          })}
        </div>
      </div>
      <ListMobile
        className="md:hidden"
        sortedList={sortedList}
        page={page}
        location={location}
      />
    </>
  )
}

export default List
