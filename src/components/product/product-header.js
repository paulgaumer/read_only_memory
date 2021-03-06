import React, { Fragment } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const ProductHeader = ({ product }) => {
  return (
    <>
      {/* ------------------ */}
      {/* DESKTOP VIEW */}
      <div
        data-name="product-top-bar"
        className="hidden md:grid px-4 pb-3 border-b border-myGrey-secondary text-primary"
        style={{ gridTemplateColumns: "40% 20% 1fr 1fr 1fr" }}
      >
        <div data-name="title-details">
          <h1>
            <span>{product.name}</span>
            {product.subtitle !== null && (
              <span className="text-secondary">, {product.subtitle}</span>
            )}
          </h1>
        </div>
        <div data-name="authors" className="pl-4">
          {product.authors !== null &&
            product.authors.map(author => (
              <p key={author.id}>{author.data.name}</p>
            ))}
        </div>
        <div data-name="editors" className="pl-4">
          {product.editors !== null &&
            product.editors.map(editor => (
              <p key={editor.id}>{editor.data.name}</p>
            ))}
        </div>
        <div data-name="collections" className="pl-4">
          {product.collections !== null &&
            product.collections.map(collection => (
              <p key={collection.id}>{collection.data.name}</p>
            ))}
        </div>
        <div data-name="year" className="pl-4" style={{ justifySelf: "end" }}>
          <p>{product.year}</p>
        </div>
      </div>
      {/* ------------------ */}

      {/* ------------------ */}
      {/* MOBILE VIEW */}
      <Accordion
        allowZeroExpanded={true}
        preExpanded={[product.name]}
        className="md:hidden"
      >
        <AccordionItem
          key={product.name}
          uuid={product.name}
          className="border-b border-myGrey-secondary"
        >
          <AccordionItemHeading>
            <AccordionItemButton className="outline-none">
              <AccordionItemState>
                {state => {
                  return (
                    <div className="flex justify-between text-primary px-4 pb-2">
                      <div>
                        <span>{product.name}</span>
                        {product.year && <span> - {product.year}</span>}
                      </div>
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
            <div className="text-primary px-4">
              {product.authors !== null && (
                <div data-name="authors" className="pb-2 pl-4 flex flex-wrap">
                  {product.authors.map((author, i) => (
                    <Fragment key={author.id}>
                      <span key={author.id}>{author.data.name}</span>
                      {i < product.authors.length - 1 && <span>, </span>}
                    </Fragment>
                  ))}
                </div>
              )}
              {product.editors !== null && (
                <div data-name="editors" className="pb-2 pl-8 flex flex-wrap">
                  {product.editors.map((editor, i) => (
                    <Fragment key={editor.id}>
                      <span key={editor.id}>{editor.data.name}</span>
                      {i < product.editors.length - 1 && <span>, </span>}
                    </Fragment>
                  ))}
                </div>
              )}
              {product.collections !== null && (
                <div data-name="collections" className="pb-2 pl-12">
                  {product.collections.map((collection, i) => (
                    <Fragment key={collection.id}>
                      <span key={collection.id}>{collection.data.name}</span>
                      {i < product.collections.length - 1 && <span>, </span>}
                    </Fragment>
                  ))}
                </div>
              )}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
      {/* ------------------ */}
    </>
  )
}

export default ProductHeader
