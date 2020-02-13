import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyAccordion from "../components/accordion"

const About = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
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
