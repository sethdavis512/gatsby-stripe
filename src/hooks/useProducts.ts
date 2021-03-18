import { graphql, useStaticQuery } from 'gatsby'
import { getProducts } from './../utils'

const useProducts = () => {
    const data = useStaticQuery(graphql`
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

    const products = getProducts(data)

    return [products]
}

export default useProducts
