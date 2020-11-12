export const ALL_STRIPE_PRICE_QUERY = `
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
`
