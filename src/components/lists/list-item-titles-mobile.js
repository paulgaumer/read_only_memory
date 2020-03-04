import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../../utils/utils"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const ItemCategory = ({ categoryInfo, name }) => {
  return (
    <div data-name={name} className="px-4 text-primary">
      {categoryInfo.map(info => (
        <p className="py-1" key={info}>
          {info}
        </p>
      ))}
    </div>
  )
}

const ListItemTitlesMobile = ({ item, page, location }) => {
  const categories = ["titles", "authors", "editors", "collections"]

  return (
    <AccordionItem
      uuid={item.name}
      className="border-b border-myGrey-secondary"
    >
      <AccordionItemHeading>
        <AccordionItemButton className="outline-none">
          <AccordionItemState>
            {state => {
              return (
                <div className="px-4 flex justify-between">
                  {state.expanded ? (
                    <span className="text-primary">
                      {capitalize(item.name)}
                    </span>
                  ) : (
                    <span>{capitalize(item.name)}</span>
                  )}

                  {state.expanded ? (
                    <span className="text-primary">&#9660;</span>
                  ) : (
                    <span className="text-secondary">&#9654;</span>
                  )}
                </div>
              )
            }}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {categories.map(category => {
          if (category !== page) {
            return (
              <Link
                to={`/titre/${sanitizeSlug(item.slug)}`}
                state={{ prevPath: location.pathname }}
              >
                <ItemCategory
                  categoryInfo={item[category]}
                  name={category}
                  key={category}
                />
              </Link>
            )
          }
          return null
        })}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ListItemTitlesMobile
