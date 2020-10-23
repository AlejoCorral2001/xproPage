const dotenv  = require('dotenv')
if(process.env.NODE_ENV != 'production'){
  dotenv.config()
}else{
  dotenv.config()
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/static/`,
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options:{
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      }
    }
    
  ]
  
};
