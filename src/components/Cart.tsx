import React, { useState } from 'react'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'

import useCart from '../hooks/useCart'
import Button from './Button'

const CartContainer = styled.div`
    margin-right: 0.5rem;
`

const CartList = styled.ul`
    list-style-type: none;
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.background};
    padding: 1rem;
    position: absolute;
`

const CartListItem = styled.li``

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Cart = () => {
    const [cart, cartActions] = useCart()

    const createHandleAddItem = product => () => {
        cartActions.addToCart(product, 1)
    }

    const createHandleRemoveItem = id => () => {
        cartActions.removeItem(id, 1)
    }

    const createHandleRemoveLineItem = id => () => {
        cartActions.removeLineItem(id)
    }

    const handleCheckoutClick = async () => {
        const stripe = await stripePromise

        const lineItems = cart.items.map((item: any) => ({
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

    const [showCart, setShowCart] = useState(false)
    const handleShowCart = () => setShowCart(!showCart)

    const mappedCartItems = cart.items.map(item => (
        <CartListItem key={kebabCase(item.name)}>
            {item.name} - {item.quantity}
            <Button onClick={createHandleRemoveItem(item.id)}>-</Button>
            <Button onClick={createHandleAddItem(item)}>+</Button>
            <Button onClick={createHandleRemoveLineItem(item.id)}>X</Button>
        </CartListItem>
    ))

    return (
        <CartContainer>
            <Button onClick={handleShowCart}>🛒 {cart.totalQuantity}</Button>
            {showCart && (
                <CartList>
                    {mappedCartItems}
                    <CartListItem>
                        <Button onClick={cartActions.clearCart}>
                            Clear cart
                        </Button>
                        <Button onClick={handleCheckoutClick}>Checkout</Button>
                    </CartListItem>
                </CartList>
            )}
        </CartContainer>
    )
}

export default Cart
