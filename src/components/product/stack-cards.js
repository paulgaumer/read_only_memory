import React, { useState } from "react"
import { TinderLikeCard } from "react-stack-cards"

const StackCards = ({ images, windowSize, name }) => {
  const [tinder, setTinder] = useState(null)

  const imgHeight = () => {
    switch (windowSize) {
      case "mega":
        return "650"
      case "xl":
        return "350"
      case "lg":
        return "350"
      case "md":
        return "250"
      case "sm":
        return "250"
      default:
        return "250"
    }
  }
  const imgWidth = () => {
    switch (windowSize) {
      case "mega":
        return "750"
      case "xl":
        return "450"
      case "lg":
        return "450"
      case "md":
        return "350"
      case "sm":
        return "350"
      default:
        return "350"
    }
  }

  const onTinderSwipe = () => {
    tinder.swipe()
  }

  const arr = images
  let arr1 = arr

  // check for the number of images
  if (arr.length > 1) {
    // Enables to loop indefinitely on the array of pictures
    for (let i = 0; i < 50; i++) {
      arr1 = arr1.concat(arr)
    }
    // return a carousel of stacked images
    return (
      <div
        onClick={() => onTinderSwipe()}
        onKeyDown={() => onTinderSwipe()}
        role="button"
        tabIndex="0"
        className="outline-none"
      >
        <TinderLikeCard
          images={arr1}
          height={imgHeight()}
          width={imgWidth()}
          direction="swipeDown"
          duration={10}
          ref={node => setTinder(node)}
        />
      </div>
    )
  }
}

export default StackCards
