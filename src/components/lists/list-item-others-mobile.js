import React, { Fragment } from "react"
import { Link } from "gatsby"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import { sanitizeSlug, capitalize } from "../../utils/utils"

const ItemCategories = ({ item, page }) => {
  return (
    <>
      {page !== "titles" && (
        <div data-name="titles" className="px-4 text-primary pl-8">
          <p className="py-1">{item.name}</p>
        </div>
      )}
      {page !== "authors" && item["authors"].length >= 1 && (
        <div
          data-name="authors"
          className="px-4 text-primary pl-12 flex flex-wrap items-baseline"
        >
          {item["authors"].map((info, i) => (
            <Fragment key={`${info}-${i}`}>
              <p className="py-1">{info}</p>
              {i < item["authors"].length - 1 && (
                <span className="pr-1">,</span>
              )}
            </Fragment>
          ))}
        </div>
      )}
      {page !== "editors" && item["editors"].length >= 1 && (
        <div data-name="editors" className="px-4 text-primary pl-16">
          {item["editors"].map((info, i) => (
            <p className="py-1" key={`${info}-${i}`}>
              {info}
            </p>
          ))}
        </div>
      )}
      {page !== "collections" && item["collections"].length >= 1 && (
        <div data-name={"collections"} className="px-4 text-primary pl-20">
          {item["collections"].map((info, i) => (
            <p className="py-1" key={`${info}-${i}`}>
              {info}
            </p>
          ))}
        </div>
      )}
    </>
  )
}

const ListItemOthers = ({ item, page, location }) => {
  return (
    <div id={item.name}>
      {item.titles.map((title, i) => {
        return (
          <AccordionItem
            key={`${item.name}-${i}`}
            uuid={`${item.name}-${i}`}
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
                          <span className="text-primary">&#9660;&#xFE0E;</span>
                        ) : (
                          <span className="text-secondary">
                            &#9654;&#xFE0E;
                          </span>
                        )}
                      </div>
                    )
                  }}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Link
                to={`${sanitizeSlug(title.slug)}`}
                state={{ prevPath: location.pathname }}
              >
                <ItemCategories item={title} page={page} />
              </Link>
            </AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </div>
  )
}

export default ListItemOthers
