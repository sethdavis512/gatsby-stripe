import { useStaticQuery, graphql } from 'gatsby'

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

    const products = data.allStripePrice.edges.map(edge => {
        const { id, product, unit_amount } = edge.node
        const { active, description, images, name } = product

        if (active) {
            return {
                active,
                description,
                id,
                images: images,
                name: name,
                price: unit_amount
            }
        }

        return null
    })
    .filter(product => !!product)

    return [products]
}

export default useProducts
