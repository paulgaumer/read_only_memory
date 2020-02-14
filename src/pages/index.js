import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  height: calc(100vh - 150px);
`

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Container className="flex justify-center items-center">
      <Link
        to="/titres"
        className="text-6xl p-2 border border-myGrey-primary text-myGrey-primary rounded-lg"
      >
        ENTRER
      </Link>
    </Container>
  </Layout>
)

export default IndexPage
