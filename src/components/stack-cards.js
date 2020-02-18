import React, { useState } from "react"
import { TinderLikeCard } from "react-stack-cards"

const StackCards = props => {
  const [tinder, setTinder] = useState(null)

  const onTinderSwipe = () => {
    tinder.swipe()
  }

  const arr = props.images
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
          width={
            props.windowSize === "sm" || props.windowSize === "md"
              ? "350"
              : "450"
          }
          height={
            props.windowSize === "sm" || props.windowSize === "md"
              ? "250"
              : "350"
          }
          direction="swipeDown"
          duration={10}
          ref={node => setTinder(node)}
        />
      </div>
    )
  } else {
    // return a single image
    return <img src={arr[0]} alt="" />
  }
}

export default StackCards
