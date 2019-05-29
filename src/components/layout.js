import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'emotion-theming'
import { Global, css } from "@emotion/core"

import theme from "../styles/theme"

const globalStyles = theme => css`
  
  ::selection {
    background: #333;
    color: #fff;
  }
  
  body {
    font-family: "Avenir Next", "Nunito", "Helvetica Neue", Helvetica,
      sans-serif;
    font-weight: 300;
    color: #fff;
    background: ${theme.colors.bodyBackground};
    transition: all 400ms linear;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <main>{children}</main>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
