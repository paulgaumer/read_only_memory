import React, { useState, useLayoutEffect } from "react"
import ListMobile from "./list-mobile"
import GroupByLetter from "./group-letter"
import ListItemTitles from "./list-item-titles"
import ListItemOthers from "./list-item-others"
import { azRange } from "../../utils/utils"
import { sortListByFirstCharacter } from "../../utils/structure-data"

const ListDesktop = ({ sortedList, page, location }) => {
  return (
    <div>
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
  )
}

const List = ({ edges, page, location }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, page, azRange)
  const [windowWidth, setWindowWidth] = useState("")

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useLayoutEffect(() => {
    // Check for the presence of window. Needed for SSR.
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize)
      return () => {
        window.removeEventListener("resize", handleWindowResize)
      }
    }
  }, [])

  return windowWidth <= 767 ? (
    <ListMobile page={page} location={location} sortedList={sortedList} />
  ) : (
    <ListDesktop page={page} location={location} sortedList={sortedList} />
  )
}

export default List
