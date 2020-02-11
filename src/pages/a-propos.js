import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const { edges } = data.allAirtable

  return (
    <Layout>
      <SEO title="A propos" />
      <div>
        <ul>
          {edges.map(({ node }) => {
            // console.log(node.data.authors)
            return <li>{node.data.name}</li>
          })}
        </ul>
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
            name
            content
          }
        }
      }
    }
  }
`
