import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import { sanitizeSlug, capitalize } from "../../utils/utils"

const ItemCategory = ({ categoryInfo, name, title }) => {
  return (
    <div data-name={name} className="ml-4">
      {name === "titles" && <p className="py-1">{title}</p>}
      {name !== "titles" &&
        categoryInfo.map(info => (
          <p className="py-1" key={info}>
            {info}
          </p>
        ))}
    </div>
  )
}

const ListItemOthers = ({ item, page, location }) => {
  const categories = ["titles", "authors", "editors", "collections"]

  return (
    <AccordionItem uuid={item.name}>
      <AccordionItemHeading>
        <AccordionItemButton className="outline-none">
          <AccordionItemState>
            {state => {
              return (
                <div className="flex justify-between text-primary">
                  <span>{capitalize(item.name)}</span>
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
        {item.titles.map((title, i) => {
          if (category !== page) {
            return (
              <div key={category} className="text-primary">
                <ItemCategory
                  categoryInfo={title[category]}
                  name={category}
                  title={title.name}
                  key={`${title.id}-${category}`}
                />
              </div>
            )
          }
          return null
        })}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ListItemOthers
