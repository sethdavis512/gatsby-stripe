import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import useCart from '../hooks/useCart'
import useProducts from '../hooks/useProducts'

import Button from '../components/Button'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import ProductDisplayGrid from '../components/ProductDisplayGrid'
import ProductGrid from '../components/ProductGrid'
import ProductCard from '../components/ProductCard'
import { getUniqueId } from '../utils'

import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const IndexPage = () => {
    const [products] = useProducts()
    const [cart, cartActions] = useCart()

    const createAddToCart = product => () => {
        cartActions.addToCart(product, 1)
    }

    const clearCart = () => {
        cartActions.clearCart()
    }

    const handleCheckoutClick = async () => {
        const stripe = await stripePromise

        const lineItems = cart.items.map((item: ProductType) => ({
            price: item.id,
            quantity: item.quantity
        }))

        const { error } = await stripe.redirectToCheckout({
            lineItems,
            mode: 'payment',
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`
        })
    }

    return (
        <Layout>
            <SEO title="Home" />
            <ProductGrid>
                <ProductDisplayGrid>
                    {products.map(product => (
                        <ProductCard key={getUniqueId('product-card')}>
                            <Link to={kebabCase(product.name)}>
                                {product.images &&
                                    product.images.map(imgUrl => (
                                        <img
                                            key={getUniqueId(
                                                'product-card-image'
                                            )}
                                            src={imgUrl}
                                            alt={product.name}
                                            width="100"
                                        />
                                    ))}
                                {product.name}
                            </Link>
                            <Button onClick={createAddToCart(product)}>
                                Add to cart
                            </Button>
                        </ProductCard>
                    ))}
                </ProductDisplayGrid>
                <div>
                    {cart.hasItems && (
                        <div>
                            {cart.items.map(item => (
                                <div key={kebabCase(item.name)}>
                                    {item.name} - {item.quantity}
                                </div>
                            ))}
                            <Button onClick={clearCart}>Clear cart</Button>
                            <Button onClick={handleCheckoutClick}>
                                Checkout
                            </Button>
                        </div>
                    )}
                </div>
            </ProductGrid>
        </Layout>
    )
}

export default IndexPage
