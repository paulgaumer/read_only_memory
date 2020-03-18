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
const ItemName = ({ item, page }) => {
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

  return (
    <div data-name="name">
      <p className={`py-1 text-primary ${pickNameHoverColor(page)}`}>
        {capitalize(item.name)}
      </p>
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

const ListItemTitles = ({ item, page, location }) => {
  const categories = ["titles", "authors", "editors", "collections"]

  const pickTextHoverColor = page => {
    switch (page) {
      case "titles":
        return "hover:text-hover-titles"
      case "authors":
        return "hover:text-hover-authors"
      case "editors":
        return "hover:text-hover-editors"
      case "collections":
        return "hover:text-hover-collections"
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
    <Link
      to={`/titre/${sanitizeSlug(item.slug)}`}
      state={{ prevPath: location.pathname }}
      className={``}
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
        grid-titles 
        group 
        ${pickTextHoverColor(page)}`}
      >
        {/* NAME */}
        <ItemName item={item} location={location} page={page} />
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
    </Link>
  )
}

export default ListItemTitles
