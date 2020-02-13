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
        name: data.name,
        slug: data.slug,
        titles: titles,
        authors: authors,
        editors: editors,
        collections: collections,
      }

      return structuredData
    }

    // DATA COMING FROM AUTHORS
    if (origin === "authors") {
      if (data.titles !== null) {
        titles = data.titles.map(title => {
          if (title.data.name !== null) {
            return title.data.name
          }
          return null
        })
        data.titles.map(title => {
          if (title.data.editors !== null) {
            title.data.editors.map(editor => {
              if (editor.data.name !== null) {
                return editors.push(editor.data.name)
              }
              return null
            })
          }
          return null
        })
        data.titles.map(title => {
          if (title.data.collections !== null) {
            title.data.collections.map(collection => {
              if (collection.data.name !== null) {
                return collections.push(collection.data.name)
              }
              return null
            })
          }
          return null
        })
      }

      const structuredData = {
        name: data.name,
        titles: titles,
        authors: authors,
        editors: editors,
        collections: collections,
      }

      return structuredData
    }

    // DATA COMING FROM EDITORS
    if (origin === "editors") {
      if (data.collections !== null) {
        collections = data.collections.map(collection => collection.data.name)
      }
      if (data.titles !== null) {
        titles = data.titles.map(title => {
          if (title.data.name !== null) {
            return title.data.name
          }
          return null
        })
        data.titles.map(title => {
          if (title.data.authors !== null) {
            title.data.authors.map(author => {
              return authors.push(author.data.name)
            })
          }
          return null
        })
      }

      const structuredData = {
        name: data.name,
        titles: titles,
        authors: authors,
        editors: editors,
        collections: collections,
      }

      return structuredData
    }

    // DATA COMING FROM COLLECTIONS
    if (origin === "collections") {
      if (data.editors !== null) {
        editors = data.editors.map(editor => editor.data.name)
      }
      if (data.titles !== null) {
        titles = data.titles.map(title => {
          if (title.data.name !== null) {
            return title.data.name
          }
          return null
        })
        data.titles.map(title => {
          if (title.data.authors !== null) {
            title.data.authors.map(author => {
              return authors.push(author.data.name)
            })
          }
          return null
        })
      }

      const structuredData = {
        name: data.name,
        titles: titles,
        authors: authors,
        editors: editors,
        collections: collections,
      }

      return structuredData
    }

    return null
  })
  return titlesList
}

export const filterListByCharacterType = (list, origin, range) => {
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
