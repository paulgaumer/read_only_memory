import React from "react"
import ImgIcon from "./img-icon"

const ProductImages = ({ images, windowSize, name }) => {
  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center pt-12 md:pt-1">
        <ImgIcon
          fill="#6B6A6B"
          width={windowSize === "sm" || windowSize === "md" ? "6rem" : "9rem"}
        />
        <p className="text-lg mt-8">Documentation en cours</p>
      </div>
    )
  } else {
    return (
      <img
        src={images[0]}
        alt={name}
        width="100%"
        height="100%"
        className="w-full h-full md:h-auto object-contain p-6 md:p-0"
        // Need both height for Safari compatibility
      />
    )
  }
}

export default ProductImages
