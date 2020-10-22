import React from "react"
import { Accordion } from "react-accessible-accordion"
import ListItemTitlesMobile from "./list-item-titles-mobile"
import ListItemOthersMobile from "./list-item-others-mobile"

const GroupByLetterMobile = ({ letter, list, page, location }) => {
  return (
    <div id={letter} className="filtered-group">
      <Accordion allowZeroExpanded={true}>
        {list.map(item => {
          if (
            item.name !== null &&
            item.name.toLowerCase().charAt(0) === letter
          ) {
            return page === "titles" ? (
              <ListItemTitlesMobile
                item={item}
                page={page}
                key={item.id}
                location={location}
              />
            ) : (
              <ListItemOthersMobile
                item={item}
                page={page}
                key={item.id}
                location={location}
              />
            )
          }
          return null
        })}
      </Accordion>
    </div>
  )
}

export default GroupByLetterMobile
