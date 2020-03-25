import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import ProductImages from "./product-images"
import { sortProductUrls } from "../../utils/structure-data"
import { getWindowSize } from "../../utils/utils"
import ImagePile from "./image-pile"
// import { bigLorem } from "../../utils/utils"
// import StackCards from "./stack-cards"

export const MaxHeightDiv = styled.div`
  /* Add max-height to fit between header & footer. 
  Add scroll behaviour on the description text from screen size md */
  @media (min-width: 768px) {
    max-height: calc(100vh - 240px);
  }
  @media (min-width: 1024px) {
    max-height: calc(100vh - 260px);
  }
  @media (min-width: 1280px) {
    max-height: calc(100vh - 270px);
  }
  @media (min-width: 1425px) {
    max-height: calc(100vh - 290px);
  }
`

const UrlBlocks = ({ urls }) => {
  if (urls === null) {
    return <p className="text-myBlue">URL à compléter</p>
  }

  return urls.map((url, i) => {
    return (
      <div className="text-myBlue pb-3" key={url}>
        <a
          href={url[1]}
          className="visited:text-indigo-600"
          target="_blank"
          rel="noopener noreferrer"
          key={`${url[1]}-${i}`}
        >
          {url[0]}
        </a>
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
      if (image.thumbnails.full !== null) {
        images.push(image.thumbnails.full.url)
      } else {
        images.push(image.thumbnails.large.url)
      }
      return null
    })
  }

  return (
    <div data-name="product-body" className="pb-0 md:pt-4 md:px-4 md:flex">
      {/* PRODUCT DESCRIPTION DESKTOP */}
      <MaxHeightDiv
        className="hidden md:block mt-4 md:overflow-y-auto"
        style={{ flexBasis: "40%" }}
      >
        {/* <p className="">{bigLorem}</p> */}
        {product.content === null ? (
          <p>Documentation en cours</p>
        ) : (
          <p>{product.content}</p>
        )}
      </MaxHeightDiv>
      {/* -------- */}

      {/* LIST OF URLS DESKTOP */}
      <MaxHeightDiv
        className="hidden md:block mt-4 px-4"
        style={{ flexBasis: "20%" }}
      >
        <UrlBlocks urls={urls} />
      </MaxHeightDiv>
      {/* -------- */}

      {/* MOBILE VIEW */}
      <Accordion
        allowZeroExpanded={true}
        allowMultipleExpanded={true}
        className="md:hidden"
      >
        {/* MOBILE DESCRIPTION */}
        <AccordionItem
          key={`${product.name}-description`}
          uuid={`${product.name}-description`}
          className="border-b border-myGrey-secondary"
        >
          <AccordionItemHeading>
            <AccordionItemButton className="outline-none">
              <AccordionItemState>
                {state => {
                  return (
                    <div className="flex justify-between text-primary px-4 py-2">
                      {state.expanded ? (
                        <span className="text-primary">Fiche Descriptive</span>
                      ) : (
                        <span className="text-secondary">
                          Fiche descriptive
                        </span>
                      )}
                      {state.expanded ? (
                        <span className="text-primary">&#9660;&#xFE0E;</span>
                      ) : (
                        <span className="text-secondary">&#9654;&#xFE0E;</span>
                      )}
                    </div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="px-4 pb-2">
              {/* <p className="text-primary">{bigLorem}</p> */}
              {product.content === null ? (
                <p>...en cours</p>
              ) : (
                <p>{product.content}</p>
              )}
            </div>
          </AccordionItemPanel>
        </AccordionItem>

        {/* MOBILE URLS */}
        <AccordionItem
          key={`${product.name}-url`}
          uuid={`${product.name}-url`}
          className="border-b border-myGrey-secondary"
        >
          <AccordionItemHeading>
            <AccordionItemButton className="outline-none">
              <AccordionItemState>
                {state => {
                  return (
                    <div className="flex justify-between text-myBlue px-4 py-2">
                      <span>www</span>
                      {state.expanded ? (
                        <span className="text-primary">&#9660;&#xFE0E;</span>
                      ) : (
                        <span className="text-secondary">&#9654;&#xFE0E;</span>
                      )}
                    </div>
                  )
                }}
              </AccordionItemState>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="px-4 pb-2 px-8">
              <UrlBlocks urls={urls} />
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      {/* ------------------ */}

      {/* CAROUSEL */}
      {images.length <= 1 && (
        <MaxHeightDiv
          className="flex justify-center md:self-start md:mt-4 "
          style={{ flexBasis: "40%" }}
        >
          <ProductImages
            images={images}
            name={product.name}
            windowSize={getWindowSize(windowWidth)}
          />
        </MaxHeightDiv>
      )}

      {images.length > 1 && (
        <>
          {/* Visible on Mobile only */}
          {/* <div
            className="flex justify-center md:hidden md:mt-4"
            style={{ flexBasis: "40%" }}
          >
            <StackCards
              images={images}
              windowSize={getWindowSize(windowWidth)}
              name={product.name}
            />
          </div> */}
          {/* Visible on Desktop only */}
          <div
            className="flex justify-center mt-4 md:px-4"
            style={{ flexBasis: "40%", height: "calc(100vh - 300px" }}
          >
            <ImagePile images={images} />
          </div>
        </>
      )}
      {/* -------- */}
    </div>
  )
}

export default ProductBody
