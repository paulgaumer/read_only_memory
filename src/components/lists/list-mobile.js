import React from "react"
import { Accordion } from "react-accessible-accordion"
import GroupByLetterMobile from "./group-letter-mobile"
import ListItemTitlesMobile from "./list-item-titles-mobile"
import ListItemOthersMobile from "./list-item-others-mobile"
import { azRange } from "../../utils/utils"

const ListMobile = ({ sortedList, page, location }) => {
  return (
    <div className="md:hidden">
      {/* Display names matching the given range */}
      {azRange.map(letter => (
        <GroupByLetterMobile
          list={sortedList.normal}
          letter={letter}
          key={letter}
          page={page}
          location={location}
        />
      ))}
      {/* Display names starting with special characters */}
      <div id="#" className="filtered-group">
        <Accordion allowZeroExpanded={true}>
          {sortedList.special.map(item => {
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
          })}
        </Accordion>
      </div>
    </div>
  )
}

export default ListMobile
