const dotenv = require('dotenv');
if (process.env.NODE_ENV != 'production') {
  dotenv.config();
} else {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: `Xpro CNC's`,
    description: 'Fabricantes de routers numéricos',
    siteUrl: `https://www.xprocncs.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/static/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-theme-animated-tailwind`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/logo/logo2.png` // This path is relative to the root of the site.
      }
    }
    // },`gatsby-plugin-offline`,
  ]
};
