import React from "react"
import ListItemTitles from "./list-item-titles"
import ListItemOthers from "./list-item-others"

const GroupByLetter = ({ letter, list, page }) => {
  return (
    <div id={letter} className="filtered-group">
      {list.map(item => {
        if (
          item.name !== null &&
          item.name.toLowerCase().charAt(0) === letter
        ) {
          return page === "titles" ? (
            <ListItemTitles item={item} page={page} key={item.id} />
          ) : (
            <ListItemOthers item={item} page={page} key={item.id} />
          )
        }
        return null
      })}
    </div>
  )
}

export default GroupByLetter
