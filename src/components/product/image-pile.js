import React, { useState } from "react"

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
    <div className="relative border border-red-600 w-full">
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
        }
        if (i === 1) {
          top = "50px"
          left = "0"
        }
        if (i === 2) {
          top = "150px"
          right = "20px"
        }
        if (i === 3) {
          top = "200px"
          left = "20px"
        }
        if (i === 4) {
          top = "250px"
          right = "30px"
        }
        if (i === 5) {
          top = "300px"
          left = "0"
        }
        if (i === 6) {
          top = "350px"
          right = "35px"
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
