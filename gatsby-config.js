require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `Gatsby Stripe`,
        description: `A small e-commerce starter built with Gatsby and Stripe.`,
        author: `@sethdavis512`
    },
    pathPrefix: `/gatsby-stripe`,
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-stripe`,
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ['Price'],
                secretKey: process.env.GATSBY_STRIPE_KEY,
                downloadFiles: true
            }
        },
        `gatsby-plugin-styled-components`
    ]
}
