import React from "react"
import Layout from "../components/layout"

const ProductPage = ({ data }) => {
  const product = data.airtable.data

  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        {product.images &&
          product.images.map(image => {
            return <img src={image.thumbnails.full.url} alt="" />
          })}
      </div>
    </Layout>
  )
}

export default ProductPage

// $id comes from the pageContext provided by gatsby-node
export const productQuery = graphql`
  query productQuery($id: String!) {
    airtable(id: { eq: $id }) {
      data {
        name
        content
        year
        images {
          thumbnails {
            full {
              url
            }
          }
        }
        authors {
          data {
            name
          }
        }
        editors {
          data {
            name
          }
        }
        collections {
          data {
            name
          }
        }
      }
    }
  }
`
