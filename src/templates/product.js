import React from "react"
import Layout from "../components/layout"
import StackCards from "../components/stack-cards"
import imgIcon from "../images/image-icon.svg"

const ProductImages = ({ images }) => {
  console.log(images)
  if (images.length >= 1) {
    return <StackCards images={images} />
  } else {
    return (
      <div className="flex flex-col items-center">
        <img src={imgIcon} alt="" className="w-40 mb-8" />
        <p className="text-xl">Pas d'images de disponibles pour le moment</p>
      </div>
    )
  }
}

const ProductPage = ({ data, location }) => {
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
    <Layout location={location}>
      <div>
        <div
          data-name="product-top-bar"
          className="grid grid-cols-4 px-4 pb-3 border-b border-myGrey-secondary"
        >
          <div data-name="title-details" className="text-myGrey-primary">
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

        <div data-name="product-body" className="md:grid grid-cols-2 px-4 py-4">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            cumque nesciunt voluptatem perspiciatis molestias nostrum ducimus
            quos debitis alias corporis placeat doloremque provident cum, ipsum
            amet laudantium aspernatur, explicabo labore! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Vero explicabo nam iusto
            necessitatibus, aut, quod non alias quasi saepe qui laudantium ab
            quis, quae voluptatem amet in quam. Natus, harum? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quia quisquam corrupti ipsam?
            Mollitia, illum. Corporis laboriosam, minima unde animi numquam id,
            praesentium beatae repellat eligendi eaque ut magnam ipsam optio?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere a
            odit ipsum tenetur exercitationem corrupti sint asperiores unde sed!
            Voluptatum totam suscipit explicabo deleniti earum, maxime veniam
            expedita commodi harum?
          </div>
          <div className="flex justify-center items-center">
            <ProductImages images={images} />
          </div>
        </div>
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
