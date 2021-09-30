/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteMetadata: {
      title: `Gatsby`,
      siteUrl: `https://www.gatsbyjs.com`,
      description: `Blazing fast modern site generator for React`,
    },
  },
  plugins: ['gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },]// Needed for dynamic images],

}
