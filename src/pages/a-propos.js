import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyAccordion from "../components/about/accordion"

const About = ({ data, location }) => {
  const { edges } = data.allAirtable

  // Check if the current location url matches the category
  const isCurrentLocation = location.pathname === `/a-propos`

  return (
    <Layout location={location}>
      <SEO title="A propos" />
      <div>
        <MyAccordion edges={edges} />
      </div>
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query aboutQuery {
    allAirtable(filter: { table: { eq: "annexes" } }) {
      edges {
        node {
          data {
            id
            name
            content
          }
        }
      }
    }
  }
`
