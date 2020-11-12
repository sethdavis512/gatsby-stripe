const kebabCase = require('lodash/kebabCase')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allStripePrice {
                edges {
                    node {
                        id
                        unit_amount
                        currency
                        product {
                            active
                            name
                            description
                            images
                        }
                    }
                }
            }
        }
    `)

    result.data.allStripePrice.edges.forEach(edge => {
        const { product, unit_amount: price, id } = edge.node
        const { active, description, name, images } = product

        if (active) {
            createPage({
                path: `${kebabCase(name)}`,
                component: require.resolve('./src/pages/product.tsx'),
                context: {
                    product: {
                        id,
                        name,
                        description,
                        price,
                        images
                    }
                }
            })
        }
    })
}
