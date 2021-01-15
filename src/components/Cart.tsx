import React, { useState } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import useCart from '../hooks/useCart'
import Button from './Button'
import CartList from './CartList'
import useSiteMetadata from '../hooks/useSiteMetaData'

const CartContainer = styled.div`
    margin-right: 0.5rem;
    padding: 1rem;

    @media (min-width: 768px) {
        position: relative;
    }
`

const CartWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;

    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
    margin-top: 0.5rem;
    padding: 1rem;

    @media (min-width: 768px) {
        left: initial;
        right: initial;
        border-radius: 12px;
        right: 0;
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
