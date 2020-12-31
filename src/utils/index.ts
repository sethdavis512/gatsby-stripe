import get from 'lodash/get'
import kebabCase from 'lodash/kebabCase'

export const getUniqueId = prefix =>
    `${kebabCase(prefix)}-${Math.random().toString(36).substr(2, 9)}`

export const getProducts = (data: IndexPageProps): ProductData => {
    const edges = get(data, 'allStripePrice.edges', [])

    return edges.reduce((products, currentEdge) => {
        const { id, product, unit_ammount: price } = currentEdge.node
        const { active, description, images, name } = product

        if (active) {
            products.push({
                id,
                description,
                images,
                name,
                price
            })
        }

        return products
    }, [])
}

export const getProduct = (data) => {
    if (!data) {
        return null
    }

    const { id, product, unit_amount } = data.stripePrice;
    const { description, images, name } = product;

    return {
        id,
        price: unit_amount,
        name,
        description,
        images
    }
}
