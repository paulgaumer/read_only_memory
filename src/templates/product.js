import React from "react"
import Layout from "../components/layout"
import ProductHeader from "../components/product/product-header"
import ProductBody from "../components/product/product-body"

const ProductPage = ({ data, location }) => {
  const product = data.airtable.data

  return (
    <Layout location={location}>
      <div>
        <ProductHeader product={product} />
        <ProductBody product={product} />
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
        urls
        images {
          thumbnails {
            large {
              url
            }
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
