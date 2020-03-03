// To get rid of special characters invalidating the uri
export const sanitizeSlug = slug => {
  let sanitizedSlug = ""
  if (slug !== null) {
    sanitizedSlug = slug.replace("%", "-")
    sanitizedSlug = sanitizedSlug.replace("?", "")
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

export const categoryToFrench = category => {
  switch (category) {
    case "titles":
      return "titres"
    case "editors":
      return "éditeurs"
    case "authors":
      return "auteurs"
    case "collections":
      return "collections"
    default:
      break
  }
}

export const getWindowSize = size => {
  if (size >= 2000) {
    return "mega"
  } else if (size >= 1280) {
    return "xl"
  } else if (size >= 1024) {
    return "lg"
  } else if (size >= 768) {
    return "md"
  } else {
    return "sm"
  }
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

export const bigLorem = `Fermentum vivamus ornare nam metus ridiculus gravida nisl curabitur
          neque magna, nec sed consequat sit id cum posuere proin volutpat, duis
          netus semper est facilisis cras faucibus purus lorem. Vitae pharetra
          primis ad massa et iaculis quam tellus pellentesque, magna senectus
          morbi erat class nunc habitant tristique himenaeos, auctor vivamus
          lectus dui etiam phasellus fermentum sagittis. Bibendum eget lacus
          dictum dis quisque molestie, inceptos cras a quis viverra tempor ad,
          ullamcorper feugiat sem curae blandit. Nostra quisque tincidunt
          parturient condimentum erat metus vehicula dapibus pharetra, sem
          rutrum egestas ullamcorper volutpat bibendum quam. Tristique semper
          facilisi sapien convallis odio tincidunt vitae metus egestas, amet
          sodales cum nisl magnis ultricies dis vivamus. Inceptos dolor
          facilisis tortor auctor egestas semper faucibus class nullam cursus
          congue scelerisque, ante laoreet ridiculus ornare himenaeos aliquet
          justo duis sit diam aliquam. Id montes egestas dictumst mi quisque
          semper nascetur ridiculus, fringilla metus est enim pharetra dui
          aenean, fermentum malesuada congue consequat neque mauris cubilia.
          Etiam montes ut erat tellus in ornare nam habitant convallis, ipsum
          suspendisse et natoque placerat justo penatibus parturient litora,
          curae ultrices eget mollis pulvinar venenatis mauris aenean. Gravida
          per sociis tellus class cras nam tincidunt curabitur, nulla convallis
          lacus pulvinar vulputate odio aliquet tempus, volutpat sem sed
          eleifend at habitasse sit. Fermentum lobortis habitant lacus per leo
          adipiscing sociis facilisis, eleifend integer arcu consectetur
          accumsan sit dictumst laoreet etiam, placerat in elit himenaeos semper
          id tempor. Vestibulum primis risus pellentesque dis massa dignissim
          fusce eros tristique porttitor cras, magnis justo dolor sociis
          lobortis nulla dictumst arcu vivamus ad diam parturient, sem luctus
          etiam orci congue nullam vehicula phasellus quis in. Commodo nam cras
          inceptos parturient velit cubilia convallis ligula lacinia risus,
          bibendum viverra pellentesque integer purus rutrum pharetra placerat.
          Nostra neque litora imperdiet amet maecenas viverra ornare mollis,
          dignissim massa iaculis volutpat facilisis placerat turpis lorem,
          pharetra et sit tempor vivamus faucibus at. Scelerisque tellus mauris
          accumsan tempor ipsum a hac taciti, eget tristique natoque montes
          semper vivamus cursus malesuada porta, class justo aptent dui quis
          maecenas ultricies. Libero quam turpis mi iaculis fusce rutrum purus
          ultrices cras, natoque dignissim hac euismod pellentesque venenatis
          nibh aliquam, magna vestibulum curae viverra tempus convallis
          tincidunt habitasse. Mauris justo sollicitudin mus et leo turpis
          himenaeos nulla, eleifend gravida hendrerit etiam sagittis magnis
          netus. Aliquet phasellus sollicitudin himenaeos eu ligula ac euismod
          ornare mi imperdiet etiam, dictum in convallis praesent fusce neque
          malesuada scelerisque viverra faucibus, penatibus quis mus sem taciti
          aliquam pharetra id lacinia turpis. Purus suspendisse scelerisque
          fusce enim dignissim molestie tellus litora quam, pellentesque feugiat
          per phasellus auctor ornare facilisi potenti, vestibulum velit
          accumsan luctus himenaeos netus hendrerit fermentum. At metus aptent
          eu potenti sociis enim, accumsan ultricies tellus aenean libero ut
          molestie, est maecenas fringilla luctus gravida. Nisl est dictum duis
          lorem quisque leo, tortor vehicula venenatis dictumst dui. Commodo
          potenti condimentum eu metus turpis curae, cras aliquam platea felis
          dapibus, viverra aptent himenaeos est mi. Montes aenean at tortor orci
          fames egestas enim curae sed ultricies cras turpis, gravida porta vel
          quis curabitur taciti diam nisi lectus lacus. Tortor orci porta dui
          lectus nostra potenti vel, ad adipiscing convallis senectus ultrices
          id proin tempor, leo luctus faucibus elit blandit mollis. Habitant
          himenaeos dictumst facilisi interdum maecenas dictum tincidunt
          condimentum tristique, nulla id luctus pulvinar morbi quisque neque
          eleifend torquent, nam mus nisi ut erat porta penatibus sem.
          Adipiscing fusce condimentum nibh nunc torquent eget ipsum mi class
          commodo etiam consequat mauris id facilisis, eu ut cum nisl ligula
          nulla magna convallis potenti parturient venenatis porta pharetra in.
          Parturient lectus tortor mi risus amet dictumst ac eget rutrum,
          vehicula non proin bibendum tristique magnis luctus primis porttitor
          leo, netus gravida sagittis potenti euismod semper sollicitudin lacus.
          Etiam arcu cum fermentum aliquet curae per blandit fusce viverra ad
          platea, tincidunt vestibulum litora aliquam sociis senectus sit erat
          morbi pellentesque, taciti a nostra orci facilisis duis integer hac
          habitasse imperdiet. Rutrum himenaeos felis turpis sagittis sed
          adipiscing eget luctus in sollicitudin neque sem, hendrerit tortor ad
          lacus diam viverra mollis montes dictum aliquet euismod. Et bibendum
          mauris turpis id gravida nam lacinia ut blandit, sit mus dictum
          aliquet ac ipsum porttitor hac luctus, quis risus fusce penatibus
          metus dis placerat aptent.`
