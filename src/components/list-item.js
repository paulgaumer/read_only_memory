import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { sanitizeSlug, capitalize, categoryToFrench } from "../utils/utils"

const ItemName = ({ item }) => {
  return (
    <div data-name="name">
      {item.slug ? (
        <p className="text-myGrey-primary">
          <Link to={`/titre/${sanitizeSlug(item.slug)}`}>
            {capitalize(item.name)}
          </Link>
        </p>
      ) : (
        <p className="text-myGrey-primary">{capitalize(item.name)}</p>
      )}
    </div>
  )
}

const ItemCategory = ({ info, name }) => {
  return (
    <div data-name={name} className="ml-4">
      {info.map(e => (
        <p className="py-1" key={e}>
          {e}
        </p>
      ))}
    </div>
  )
}

const ItemGrid = styled.div`
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  &.grid-titles {
    grid-template-areas: "name authors editors collections";
  }
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

const ListItem = ({ item, page }) => {
  const categories = ["titles", "authors", "editors", "collections"]
  const [gridTemplate, setGridTemplate] = useState("grid-titles")

  // Select a template for CSS Grid area based on the current page
  useEffect(() => {
    switch (page) {
      case "titles":
        setGridTemplate("grid-titles")
        break
      case "authors":
        setGridTemplate("grid-authors")
        break
      case "editors":
        setGridTemplate("grid-editors")
        break
      case "collections":
        setGridTemplate("grid-collections")
        break
      default:
        setGridTemplate("grid-titles")
        break
    }
  }, [page])

  return (
    <ItemGrid
      data-name="list-item"
      className={`md:grid border-b border-myGrey-secondary pb-2 px-4 ${gridTemplate}`}
    >
      <ItemName item={item} />
      {categories.map(category => {
        if (category !== page) {
          return (
            <div key={category}>
              {/* Category title for mobile layout */}
              {item[category].length >= 1 && (
                <p className="md:hidden">
                  {capitalize(categoryToFrench(category))}
                </p>
              )}
              {/* ***** */}
              <ItemCategory info={item[category]} name={category} />
            </div>
          )
        }
        return null
      })}
    </ItemGrid>
  )
}

export default ListItem
