import React from "react"
import StackCards from "./stack-cards"
import ImgIcon from "./img-icon"

const ProductImages = ({ images, windowSize, name }) => {
  if (images.length >= 1) {
    return <StackCards images={images} windowSize={windowSize} name={name} />
  } else {
    return (
      <div className="flex flex-col items-center pt-6">
        <ImgIcon
          fill="#4A4A4A"
          width={windowSize === "sm" || windowSize === "md" ? "6rem" : "9rem"}
        />
        <p className="text-xl mt-8">Documentation en cours</p>
      </div>
    )
  }
}

export default ProductImages
