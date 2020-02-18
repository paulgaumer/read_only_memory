import React from "react"
import useDarkMode from "use-dark-mode"
import GroupByLetter from "./group-letter"
import ListItem from "./list-item"
import { azRange, categoryToFrench } from "../../utils/utils"
import { sortListByFirstCharacter } from "../../utils/structure-data"

const List = ({ edges, page }) => {
  // Filter the list to sort names starting with special character or normal letters
  const sortedList = sortListByFirstCharacter(edges, page, azRange)

  const darkMode = useDarkMode(false)

  const handleClick = mode => {
    return mode === "dark" ? darkMode.enable() : darkMode.disable()
  }

  return (
    <div>
      <div data-name="dark-mode-switch">
        <button
          className="m-6 p-2 bg-teal-400 text-white"
          onClick={() => handleClick("dark")}
        >
          DARK
        </button>
        <button
          className="m-6 p-2 bg-teal-400 text-white"
          onClick={() => handleClick("light")}
        >
          LIGHT
        </button>
      </div>
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
          return <ListItem item={item} page={page} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default List
