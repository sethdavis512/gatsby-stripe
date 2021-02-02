import React from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'

import useCart from '../hooks/useCart'
import Button from './Button'
import CartList from './CartList'
import useSiteMetadata from '../hooks/useSiteMetaData'

const CartContainer = styled.div`
    margin-right: 0.5rem;
    padding: 1rem;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    @media (min-width: 970px) {
        width: 300px;
        height: 100vh;
    }
`

const CartButtonTray = styled.div`
    display: flex;
    justify-content: space-between;
`

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
            <h3>
                Cart
            </h3>
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
