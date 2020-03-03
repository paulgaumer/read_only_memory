import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ProductImages from "./product-images"
import { sortProductUrls } from "../../utils/structure-data"
import { bigLorem, getWindowSize } from "../../utils/utils"

const Description = styled.div`
  max-height: calc(100vh - 270px);
`

const UrlBlock = ({ url }) => {
  // console.log(url)
  return url.map(el => {
    return el.search("http") !== -1 ? (
      <a href={el} target="_blank" key={el}>
        {el}
      </a>
    ) : (
      <p key={el}>{el}</p>
    )
  })
}

const UrlBlocks = ({ urls }) => {
  // console.log(urls)
  if (urls === null) {
    return <p>URL à compléter</p>
  }

  return urls.map(url => {
    return (
      <div className="text-myBlue pb-3" key={url}>
        <UrlBlock url={url} />
      </div>
    )
  })
}

const ProductBody = ({ product }) => {
  let urls = sortProductUrls(product.urls)
  let images = []
  const [windowWidth, setWindowWidth] = useState("")

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    // Check for the presence of window. Needed for SSR.
    if (typeof window !== undefined) {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize)
      return () => {
        window.removeEventListener("resize", handleWindowResize)
      }
    }
  }, [])

  // create an array of images from data
  if (product.images) {
    product.images.map(image => {
      images.push(image.thumbnails.full.url)
      return null
    })
  }

  return (
    <div data-name="product-body" className="md:grid md:grid-cols-3 px-4 pt-4">
      <Description className="mt-6 md:overflow-y-auto">
        <p className="">{bigLorem}</p>
      </Description>
      <div className="mt-6 px-4">
        <UrlBlocks urls={urls} />
      </div>

      {/* CAROUSEL */}
      <div className="flex justify-center items-center">
        <ProductImages
          images={images}
          name={product.name}
          windowSize={getWindowSize(windowWidth)}
        />
      </div>
      {/* -------- */}
    </div>
  )
}

export default ProductBody
