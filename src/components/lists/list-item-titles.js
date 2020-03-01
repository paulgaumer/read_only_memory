import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { sanitizeSlug, capitalize } from "../../utils/utils"

const ItemGrid = styled.div`
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  &.grid-titles {
    grid-template-areas: "name authors editors collections";
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
const ItemName = ({ item }) => {
  return (
    <div data-name="name">
      {item.slug ? (
        <p className="text-primary">
          <Link to={`/titre/${sanitizeSlug(item.slug)}`}>
            {capitalize(item.name)}
          </Link>
        </p>
      ) : (
        <p className="text-primary">{capitalize(item.name)}</p>
      )}
    </div>
  )
}

const ItemCategory = ({ categoryInfo, name }) => {
  return (
    <div data-name={name} className="ml-4">
      {categoryInfo.map(info => (
        <p className="py-1" key={info}>
          {info}
        </p>
      ))}
    </div>
  )
}

const ListItemTitles = ({ item, page }) => {
  const categories = ["titles", "authors", "editors", "collections"]

  return (
    <ItemGrid
      data-name="list-item"
      className={`md:grid border-b border-myGrey-secondary pb-2 px-4 grid-titles`}
    >
      {/* NAME */}
      <ItemName item={item} />
      {/* CATEGORIES INFO */}
      {categories.map(category => {
        if (category !== page) {
          return (
            <div key={category}>
              <ItemCategory categoryInfo={item[category]} name={category} />
            </div>
          )
        }
        return null
      })}
    </ItemGrid>
  )
}

export default ListItemTitles
