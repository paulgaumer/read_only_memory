import React from "react"

const ProductHeader = ({ product }) => {
  return (
    <div
      data-name="product-top-bar"
      className="grid grid-cols-4 px-4 pb-3 border-b border-myGrey-secondary"
    >
      <div data-name="title-details" className="text-primary">
        <h1>{product.name}</h1>
        <p>{product.year}</p>
      </div>
      <div data-name="authors">
        {product.authors !== null &&
          product.authors.map(author => (
            <p key={author.id}>{author.data.name}</p>
          ))}
      </div>
      <div data-name="editors">
        {product.editors !== null &&
          product.editors.map(editor => (
            <p key={editor.id}>{editor.data.name}</p>
          ))}
      </div>
      <div data-name="collections">
        {product.collections !== null &&
          product.collections.map(collection => (
            <p key={collection.id}>{collection.data.name}</p>
          ))}
      </div>
    </div>
  )
}

export default ProductHeader
