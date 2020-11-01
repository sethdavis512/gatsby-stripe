import { useStaticQuery, graphql } from 'gatsby'

const useProducts = () => {
    const data = useStaticQuery(graphql`
        query {
            allStripePrice {
                edges {
                    node {
                        active
                        id
                        unit_amount
                        currency
                        product {
                            name
                            description
                            images
                        }
                    }
                }
            }
        }
    `)

    const products = data.allStripePrice.edges.map(edge => {
        const { active, id, product, unit_amount } = edge.node
        return {
            active,
            description: product.description,
            id,
            images: product.images,
            name: product.name,
            price: unit_amount
        }
    })

    return [products]
}

export default useProducts
