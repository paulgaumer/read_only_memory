import React, { useState } from "react"
import { TinderLikeCard } from "react-stack-cards"

const StackCards = ({ images, windowSize, name }) => {
  const [tinder, setTinder] = useState(null)

  // console.log(windowSize)

  const isSmallDevice = () => {
    return windowSize === "sm" || windowSize === "md"
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
          height={isSmallDevice() ? "250" : "350"}
          width={isSmallDevice() ? "350" : "450"}
          direction="swipeDown"
          duration={10}
          ref={node => setTinder(node)}
        />
      </div>
    )
  } else {
    // return a single image
    return (
      <img
        src={arr[0]}
        alt={name}
        width={isSmallDevice() ? "350" : "450"}
        className="pt-8 lg:pt-0"
      />
    )
  }
}

export default StackCards
