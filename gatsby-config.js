/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// const IsProduction = process.env.NODE_ENV === 'production' ;
console.log({ ENV: process.env.NODE_ENV })



module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ].filter(Boolean),
}
