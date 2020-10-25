import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage = () => {
    const [products] = useProducts()
    const [cart, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <ul>
                    {products.map(product => (
                        <li key={kebabCase(product.name)}>
                            <Link to={kebabCase(product.name)}>
                                {product.images &&
                                    product.images.map(imgUrl => (
                                        <img src={imgUrl} alt={product.name} />
                                    ))}
                                {product.name}
                            </Link>
                            <Button onClick={createAddToCart(product)}>
                                Add to cart
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            {cart.hasItems && (
                <div>
                    <ul>
                        {cart.items.map(item => (
                            <li key={kebabCase(item.name)}>
                                {item.name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Layout>
    )
}

export default IndexPage
