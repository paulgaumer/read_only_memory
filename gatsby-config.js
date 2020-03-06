require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `readonlymemory`,
    description: `readonlymemory.net`,
    author: `Gilles Rouffineau`,
    image: "/images/banner-seotags.png",
    siteUrl: `https://readonlymemory.net/`,
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
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      // options: {
      //   postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      // },
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
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["iAWriter", "HelveticaLTStd-Roman"],
          urls: ["/fonts/fonts.css"],
        },
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
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
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
        icon: `src/images/rename-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
