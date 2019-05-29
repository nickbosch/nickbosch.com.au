/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scroll-to/,
            use: loaders.null()
          },
        ],
      },
    })
  }
}
