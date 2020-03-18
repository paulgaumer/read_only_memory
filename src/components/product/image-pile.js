import React, { useState } from "react"

const ImagePile = ({ images }) => {
  const [visiblePic, setVisiblePic] = useState(1)

  function handleClick(pictureId, e) {
    console.log(e.target)
    console.log(pictureId)
    if (pictureId === images.length) {
      // RESET
      setVisiblePic(1)
    } else if (pictureId < visiblePic) {
      // COME BACK TO PREVIOUS PICTURE
      setVisiblePic(pictureId)
    } else {
      // GO TO NEXT PICTURE
      setVisiblePic(pictureId + 1)
    }
  }

  return (
    <div className="relative w-full">
      <span>
        {visiblePic}/{images.length}
      </span>

      {images.map((image, i) => {
        let top = "0"
        let right = "0"
        let bottom = ""
        let left = ""
        let transform = ""

        if (i === 0) {
          left = "50%"
          transform = "translate(-50%)"
        } else if (i % 2 !== 0) {
          top = `${i * 20}px`
          left = "20px"
        } else {
          top = `${i * 20}px`
          right = "20px"
        }

        const pictureId = i + 1

        const style = {
          maxWidth: "80%",
          top,
          left,
          bottom,
          right,
          transform,
          zIndex: visiblePic === pictureId ? "45" : pictureId,
          visibility: pictureId <= visiblePic ? "visible" : "hidden",
        }

        return (
          <img
            index={i}
            src={image}
            alt=""
            className={`absolute`}
            style={style}
            onClick={e => handleClick(pictureId, e)}
            onKeyDown={e => handleClick(pictureId, e)}
          />
        )
      })}
    </div>
  )
}

export default ImagePile
