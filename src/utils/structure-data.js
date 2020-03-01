import { deleteMultiples } from "./utils"

const structureData = (list, origin) => {
  const titlesList = list.map(({ node }) => {
    const { data } = node
    let titles = []
    let editors = []
    let collections = []
    let authors = []

    // DATA COMING FROM TITLES
    if (origin === "titles") {
      if (data.authors !== null) {
        authors = data.authors.map(author => {
          if (author.data.name !== null) {
            return author.data.name
          }
          return null
        })
      }
      if (data.collections !== null) {
        collections = data.collections.map(collection => {
          if (collection.data.name !== null) {
            return collection.data.name
          }
          return null
        })
      }
      if (data.editors !== null) {
        editors = data.editors.map(editor => {
          if (editor.data.name !== null) {
            return editor.data.name
          }
          return null
        })
      }

      const structuredData = {
        id: node.id,
        name: data.name,
        slug: data.slug,
        titles: deleteMultiples(titles),
        authors: deleteMultiples(authors),
        editors: deleteMultiples(editors),
        collections: deleteMultiples(collections),
      }

      return structuredData
    }

    // DATA COMING FROM AUTHORS
    if (origin === "authors") {
      if (data.titles !== null) {
        data.titles.map(title => {
          if (title.data.name !== null) {
            if (title.data.editors !== null) {
              editors = title.data.editors.map(editor => {
                return editor.data.name
              })
            }
            if (title.data.collections !== null) {
              collections = title.data.collections.map(collection => {
                return collection.data.name
              })
            }
            titles.push({
              id: title.id,
              slug: `/titre/${title.data.slug}`,
              name: title.data.name,
              editors: editors,
              collections: collections,
            })
          }
          return null
        })
      }

      const structuredData = {
        id: node.id,
        name: data.name,
        titles: titles,
      }

      return structuredData
    }

    // DATA COMING FROM EDITORS
    if (origin === "editors") {
      if (data.titles !== null) {
        data.titles.map(title => {
          if (title.data.name !== null) {
            if (title.data.authors !== null) {
              authors = title.data.authors.map(author => {
                return author.data.name
              })
            }
            if (title.data.collections !== null) {
              collections = title.data.collections.map(collection => {
                return collection.data.name
              })
            }
            titles.push({
              id: title.id,
              slug: `/titre/${title.data.slug}`,
              name: title.data.name,
              authors: authors,
              collections: collections,
            })
          }
          return null
        })
      }

      const structuredData = {
        id: node.id,
        name: data.name,
        titles: titles,
      }

      return structuredData
    }

    // DATA COMING FROM COLLECTIONS
    if (origin === "collections") {
      if (data.titles !== null) {
        data.titles.map(title => {
          if (title.data.name !== null) {
            if (title.data.authors !== null) {
              authors = title.data.authors.map(author => {
                return author.data.name
              })
            }
            if (title.data.editors !== null) {
              editors = title.data.editors.map(editors => {
                return editors.data.name
              })
            }
            titles.push({
              id: title.id,
              slug: `/titre/${title.data.slug}`,
              name: title.data.name,
              authors: authors,
              editors: editors,
            })
          }
          return null
        })
      }

      const structuredData = {
        id: node.id,
        name: data.name,
        titles: titles,
      }

      return structuredData
    }
    return null
  })
  return titlesList
}

export const sortListByFirstCharacter = (list, origin, range) => {
  // Get list of structured data
  const titlesList = structureData(list, origin)

  // Categorize the two types of names
  let normal = []
  let special = []

  // Check if each title matches the given range and group them by first letters
  titlesList.map(title => {
    if (title.name !== null) {
      if (
        range.some(
          letter => title.name.charAt(0).toLowerCase() === letter.toLowerCase()
        )
      ) {
        normal.push(title)
      } else {
        special.push(title)
      }
    }
    return null
  })
  return { normal, special }
}
