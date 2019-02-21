import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Global, css } from "@emotion/core";
import normalize from "normalize.css";

const globalStyles = css`
  ${normalize}
  body {
    font-family: "Avenir Next", "Nunito", "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 300;
    color: rgb(10, 10, 10);
  }
`;

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
      <div>
        <Global styles={globalStyles} />
        <main>{children}</main>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
