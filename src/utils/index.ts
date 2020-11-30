import get from 'lodash/get'
import kebabCase from 'lodash/kebabCase'

export const getUniqueId = prefix =>
    `${kebabCase(prefix)}-${Math.random().toString(36).substr(2, 9)}`

export const getProducts = data => {
    const edges = get(data, 'allStripePrice.edges', [])

    return edges.reduce((products, currentEdge) => {
        const { product, unit_ammount: price } = currentEdge.node
        const { active, description, images, name } = product

        if (active) {
            products.push({
                description,
                images,
                name,
                price
            })
        }

        return products
    }, [])
}
