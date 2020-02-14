// To get rid of special characters invalidating the uri
export const sanitizeSlug = slug => {
  let sanitizedSlug = ""
  if (slug !== null) {
    sanitizedSlug = slug.replace("%", "-")
    // console.log(sanitizedSlug)
    sanitizedSlug = sanitizedSlug.replace("?", "")
    // console.log(sanitizedSlug)
  }
  return sanitizedSlug
}

export const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const deleteMultiples = list => {
  const sortedList = list.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item]
  }, [])

  return sortedList
}

export const azRange = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "é",
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
