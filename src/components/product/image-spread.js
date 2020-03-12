import React, { useState } from "react"

const ImageSpread = ({ images }) => {
  const [visible, setVisible] = useState("")

  function handleClick(id, e) {
    console.log(e.target)
    setVisible(id)
  }

  return (
    <div
      className="relative border border-red-600"
      style={{ flexBasis: "40%", height: "70vh" }}
    >
      {images.length}
      {images.map((image, i) => {
        let top = "0"
        let right = "0"
        let bottom = ""
        let left = ""

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
          left = "60px"
        }
        if (i === 5) {
          top = "300px"
          left = "0"
        }
        if (i === 6) {
          top = "350px"
          left = "70px"
        }

        const picId = i + 1

        const style = {
          maxWidth: "80%",
          top,
          left,
          bottom,
          right,
          zIndex: visible === picId ? "45" : picId,
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

export default ImageSpread
