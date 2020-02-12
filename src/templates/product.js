import React from "react"
import Layout from "../components/layout"
import StackCards from "../components/stack-cards"

const ProductPage = ({ data }) => {
  const product = data.airtable.data
  let images = []

  // create an array of images from data
  if (product.images) {
    product.images.map(image => {
      images.push(image.thumbnails.full.url)
      return null
    })
  }

  return (
    <Layout>
      <div>
        <h1>{product.name}</h1>
        <StackCards images={images} />
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
