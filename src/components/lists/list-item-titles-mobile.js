import React, { Fragment } from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../../utils/utils"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const ItemCategories = ({ item, page }) => {
  return (
    <>
      {page !== "titles" && item["titles"].length >= 1 && (
        <div data-name="titles" className="px-4 text-primary pl-4">
          {item["titles"].map(info => (
            <p className="py-1" key={info}>
              {info}
            </p>
          ))}
        </div>
      )}
      {page !== "authors" && item["authors"].length >= 1 && (
        <div data-name="authors" className="px-4 text-primary pl-8">
          {item["authors"].map((info, i) => (
            <Fragment key={info}>
              <span className="py-1" key={info}>
                {info}
              </span>
              {i < item["authors"].length - 1 && (
                <span className="pr-1">,</span>
              )}
            </Fragment>
          ))}
        </div>
      )}
      {page !== "editors" && item["editors"].length >= 1 && (
        <div data-name="editors" className="px-4 text-primary pl-12">
          {item["editors"].map((info, i) => (
            <Fragment key={info}>
              <span className="py-1" key={info}>
                {info}
              </span>
              {i < item["editors"].length - 1 && (
                <span className="pr-1">,</span>
              )}
            </Fragment>
          ))}
        </div>
      )}
      {page !== "collections" && item["collections"].length >= 1 && (
        <div data-name={"collections"} className="px-4 text-primary pl-16">
          {item["collections"].map((info, i) => (
            <Fragment key={info}>
              <span className="py-1" key={info}>
                {info}
              </span>
              {i < item["collections"].length - 1 && (
                <span className="pr-1">,</span>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </>
  )
}

const ListItemTitlesMobile = ({ item, page, location }) => {
  // const categories = ["titles", "authors", "editors", "collections"]

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
                    <span className="text-primary">&#9660;&#xFE0E;</span>
                  ) : (
                    <span className="text-secondary">&#9654;&#xFE0E;</span>
                  )}
                </div>
              )
            }}
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Link
          to={`/titre/${sanitizeSlug(item.slug)}`}
          state={{ prevPath: location.pathname }}
        >
          <ItemCategories item={item} page={page} />
        </Link>
      </AccordionItemPanel>
    </AccordionItem>
  )
}

export default ListItemTitlesMobile
