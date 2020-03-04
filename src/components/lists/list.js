import React, { useEffect, useState } from "react"
import ListMobile from "./list-mobile"
import GroupByLetter from "./group-letter"
import ListItemTitles from "./list-item-titles"
import ListItemOthers from "./list-item-others"
import { azRange } from "../../utils/utils"
import { sortListByFirstCharacter } from "../../utils/structure-data"

const List = ({ edges, page, location }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, page, azRange)

  const [windowWidth, setWindowWidth] = useState("")

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize)
      return () => {
        window.removeEventListener("resize", handleWindowResize)
      }
    }
  })

  return (
    <>
      {windowWidth >= 767 ? (
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
      ) : (
        <ListMobile sortedList={sortedList} page={page} location={location} />
      )}
    </>
  )
}

export default List
