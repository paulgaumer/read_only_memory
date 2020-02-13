import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link
      to="/titres"
      className="p-2 border border-myGrey-primary text-myGrey-primary rounded-lg"
    >
      ENTRER
    </Link>
  </Layout>
)

export default IndexPage
