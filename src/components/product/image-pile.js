import React, { useState } from "react"
import { array } from "prop-types"

const ImagePile = ({ images }) => {
  const [visiblePic, setVisiblePic] = useState(1)

  function handleClick(picId, e) {
    console.log(e.target)
    console.log(picId)
    if (picId === images.length) {
      setVisiblePic(1)
    } else {
      setVisiblePic(picId + 1)
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
          top = `${i * 50}px`
          left = "20px"
        } else {
          top = `${i * 50}px`
          right = "20px"
        }

        const picId = i + 1

        const style = {
          maxWidth: "80%",
          top,
          left,
          bottom,
          right,
          transform,
          zIndex: visiblePic === picId ? "45" : picId,
          visibility: picId <= visiblePic ? "visible" : "hidden",
        }

        return (
          <img
            index={i}
            src={image}
            alt=""
            className={`absolute`}
            style={style}
            onClick={e => handleClick(picId, e)}
          />
        )
      })}
    </div>
  )
}

export default ImagePile
