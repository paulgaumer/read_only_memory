import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MyAccordion from "../components/about/accordion"

const About = ({ data, location }) => {
  const { edges } = data.allAirtable

  return (
    <Layout location={location}>
      <SEO title="A propos" />
      <div>
        <MyAccordion edges={edges.reverse()} />
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
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`
