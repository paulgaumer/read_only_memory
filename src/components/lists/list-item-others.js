import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { sanitizeSlug, capitalize } from "../../utils/utils"

const ItemGrid = styled.div`
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  &.grid-authors {
    grid-template-areas: "name titles editors collections";
  }
  &.grid-editors {
    grid-template-areas: "name titles authors collections";
  }
  &.grid-collections {
    grid-template-areas: "name titles authors editors";
  }

  div[data-name="name"] {
    grid-area: name;
  }
  div[data-name="titles"] {
    grid-area: titles;
  }
  div[data-name="authors"] {
    grid-area: authors;
  }
  div[data-name="editors"] {
    grid-area: editors;
  }
  div[data-name="collections"] {
    grid-area: collections;
  }
`

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

  const pickNameHoverColor = page => {
    switch (page) {
      case "titles":
        return "group-hover:text-hover-titles"
      case "authors":
        return "group-hover:text-hover-authors"
      case "editors":
        return "group-hover:text-hover-editors"
      case "collections":
        return "group-hover:text-hover-collections"
      default:
        break
    }
  }

  const pickBorderHoverColor = page => {
    switch (page) {
      case "titles":
        return "hover:border-hover-titles"
      case "authors":
        return "hover:border-hover-authors"
      case "editors":
        return "hover:border-hover-editors"
      case "collections":
        return "hover:border-hover-collections"
      default:
        break
    }
  }

  return (
    <div id={item.name}>
      {item.titles.map((title, i) => {
        return (
          <Link
            to={sanitizeSlug(title.slug)}
            state={{ prevPath: location.pathname }}
            key={title.id}
          >
            <ItemGrid
              data-name="list-item"
              className={`
              md:grid 
              border-b 
              border-myGrey-secondary 
              ${pickBorderHoverColor(page)} 
              pb-2 
              px-4 
              grid-${page} 
              group hover:text-hover-${page}`}
            >
              {/* NAME */}
              <div data-name="name" className="text-primary">
                {/* Display name only for the first element of the array */}
                <p
                  className={`
                  ${i === 0 ? "visible" : "invisible"} 
                  ${pickNameHoverColor(page)}`}
                >
                  {capitalize(item.name)}
                </p>
              </div>
              {/* CATEGORY INFO */}
              {categories.map(category => {
                if (category !== page) {
                  return (
                    <ItemCategory
                      categoryInfo={title[category]}
                      name={category}
                      title={title.name}
                      key={`${title.id}-${category}`}
                    />
                  )
                }
                return null
              })}
            </ItemGrid>
          </Link>
        )
      })}
    </div>
  )
}

export default ListItemOthers
