const cfg = {
  siteMetadata: {
    title: `Nick Bosch - Web Developer`,
    description: `I’m Nick, a web developer based in Sydney and the Southern Highlands. I have a strong background in website development and data science and have been helping people get online for nearly ten years! I’ve worked with a range of individuals and businesses to successfully develop and implement their online strategy.`,
    author: `@nicholasbosch`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Nunito:300,400,700,900`],
    //   },
    // },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Bosch - Web Developer`,
        short_name: `Nick Bosch`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

// use Netlify context to ensure we are in production
if (process.env.CONTEXT === "production") {
  cfg.plugins.push({
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [process.env.GA_TRACKING_ID],
      pluginConfig: {
        head: false,
      },
    },
  })
}

module.exports = cfg
