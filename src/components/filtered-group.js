import React from "react"
import { Link } from "gatsby"
import { sanitizeSlug, capitalize } from "../utils/utils"

const ItemName = ({ item }) => {
  return (
    <div data-name="name">
      {item.slug ? (
        <p>
          <Link to={`/titre/${sanitizeSlug(item.slug)}`}>
            {capitalize(item.name)}
          </Link>
        </p>
      ) : (
        <p>{capitalize(item.name)}</p>
      )}
    </div>
  )
}

const ItemCategory = ({ info, name }) => {
  return (
    <div data-name={name}>
      {info.map(e => (
        <span>{e}</span>
      ))}
    </div>
  )
}

const ListItem = ({ item }) => {
  const categories = ["titles", "authors", "editors", "collections"]
  return (
    <div className="listitem">
      <ItemName item={item} />
      {categories.map(category => {
        return <ItemCategory info={item[category]} name={category} />
      })}
    </div>
  )
}

const GroupByLetter = ({ letter, list }) => {
  return (
    <div id={letter} className="filtered-group">
      {list.map((item, i) => {
        if (
          item.name !== null &&
          item.name.toLowerCase().charAt(0) === letter
        ) {
          return <ListItem item={item} />
        }
        return null
      })}
    </div>
  )
}

export default GroupByLetter
