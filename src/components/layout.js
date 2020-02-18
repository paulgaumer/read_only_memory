import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/header"
import Footer from "./footer/footer"
import "../styles/global.scss"

const Layout = ({ children, location = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="outer-container">
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <div>
          <main id="page-wrap" className="mb-20 md:mt-16 lg:mt-20 xl:mt-24">
            {children}
          </main>
        </div>
        <Footer location={location} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
