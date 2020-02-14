import React from "react"
import ListItem from "./list-item"

const GroupByLetter = ({ letter, list, location }) => {
  return (
    <div id={letter} data-name="filtered-group">
      {list.map((item, i) => {
        if (
          item.name !== null &&
          item.name.toLowerCase().charAt(0) === letter
        ) {
          return <ListItem item={item} location={location} />
        }
        return null
      })}
    </div>
  )
}

export default GroupByLetter
