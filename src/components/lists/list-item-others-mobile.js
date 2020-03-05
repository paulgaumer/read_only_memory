import React from "react"
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
  console.log(item)
  return (
    <>
      {page !== "titles" && (
        <div data-name="titles" className="px-4 text-primary pl-8">
          <p className="py-1">{item.name}</p>
        </div>
      )}
      {page !== "authors" && item["authors"].length >= 1 && (
        <div data-name="authors" className="px-4 text-primary pl-12">
          {item["authors"].map((info, i) => (
            <p className="py-1" key={`${info}-${i}`}>
              {info}
            </p>
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

// const ItemCategory = ({ categoryInfo, name, title }) => {
//   return (
//     <div data-name={name} className="ml-4">
//       {name === "titles" && <p className="py-1">{title}</p>}
//       {name !== "titles" &&
//         categoryInfo.map(info => (
//           <p className="py-1" key={info}>
//             {info}
//           </p>
//         ))}
//     </div>
//   )
// }

const ListItemOthers = ({ item, page, location }) => {
  const categories = ["titles", "authors", "editors", "collections"]

  return (
    <div id={item.name}>
      {item.titles.map((title, i) => {
        return (
          <AccordionItem
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
              {/* {categories.map(category => {
                if (category !== page) {
                  return (
                    <Link
                      to={`${sanitizeSlug(title.slug)}`}
                      state={{ prevPath: location.pathname }}
                    >
                      <div key={category} className="text-primary">
                        <ItemCategory
                          categoryInfo={title[category]}
                          name={category}
                          title={title.name}
                          key={`${title.id}-${category}`}
                        />
                      </div>
                    </Link>
                  )
                }
                return null
              })} */}
              <Link
                to={`/titre/${sanitizeSlug(title.slug)}`}
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
