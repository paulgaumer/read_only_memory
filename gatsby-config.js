require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `readonlymemory`,
    description: `readonlymemory.net`,
    author: `Gilles Rouffineau`,
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `app9UK9ZbcSlC8PhP`,
            tableName: `titles`,
            tableLinks: [`authors`, `editors`, `collections`],
          },
          {
            baseId: `app9UK9ZbcSlC8PhP`,
            tableName: `authors`,
            tableLinks: [`titles`],
          },
          {
            baseId: `app9UK9ZbcSlC8PhP`,
            tableName: `editors`,
            tableLinks: [`titles`, `collections`],
          },
          {
            baseId: `app9UK9ZbcSlC8PhP`,
            tableName: `collections`,
            tableLinks: [`titles`, `editors`],
          },
          {
            baseId: `app9UK9ZbcSlC8PhP`,
            tableName: `annexes`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
