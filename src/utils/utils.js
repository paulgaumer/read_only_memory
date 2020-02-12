export const sanitizeSlug = slug => {
  let sanitizedSlug = ""
  if (slug !== null) {
    sanitizedSlug = slug.replace("%", "-")
  }
  return sanitizedSlug
}

export const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const azRange = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

export const filterListByCharacterType = (list, range) => {
  // Create a consistent structure for the data
  const titlesList = list.map(({ node }) => {
    return node.data.slug
      ? { name: node.data.name, slug: node.data.slug }
      : { name: node.data.name }
  })

  // Initialize the two types of name
  let normal = []
  let special = []

  // Assign each title to a type of name
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
  })
  return { normal, special }
}
