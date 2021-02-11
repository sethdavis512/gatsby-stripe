import React from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { Button } from './styles/ButtonStyles'
import { CartContainer, CartButtonTray } from './styles/CartStyles'
import CartList from './CartList'
import useCart from '../hooks/useCart'
import useSiteMetadata from '../hooks/useSiteMetaData'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
    const [cart, cartActions] = useCart()
    const { pathPrefix } = useSiteMetadata()

    const handleCheckoutClick = async () => {
        const stripe = await stripePromise

        const lineItems = cart.items.map((item: any) => ({
            price: item.id,
            quantity: item.quantity
        }))

        const urlBase = `${window.location.origin}${pathPrefix}`
        const successUrl = `${urlBase}/success`
        const cancelUrl = `${urlBase}/cancel`

        const { error } = await stripe.redirectToCheckout({
            lineItems,
            mode: 'payment',
            successUrl,
            cancelUrl
        })
    }

    return (
        <CartContainer>
            <h3>Cart</h3>
            <CartList items={cart.items} />
            <CartButtonTray>
                <Button onClick={cartActions.clearCart}>Clear cart</Button>
                <Button disabled={!cart.hasItems} onClick={handleCheckoutClick}>
                    Checkout
                </Button>
            </CartButtonTray>
        </CartContainer>
    )
}

export default Cart
