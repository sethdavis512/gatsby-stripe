import React, { useState } from 'react'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'

import useCart from '../hooks/useCart'
import Button from './Button'

const CartContainer = styled.div`
    margin-right: 0.5rem;
    
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

const CartList = styled.ul`
    list-style-type: none;
    color: ${({ theme }) => theme.foreground};
    margin: 0;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 12px;
`

const CartListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CartListItemButton = styled(Button)`
    padding: 0.5rem;
    border-radius: 0px;
`

const CartButtonTray = styled.div`
    display: flex;
    justify-content: space-between;
`

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
            successUrl: `${window.location.origin}/gatsby-stripe/success`,
            cancelUrl: `${window.location.origin}/gatsby-stripe/cancel`
        })
    }

    const [showCart, setShowCart] = useState(false)
    const handleShowCart = () => setShowCart(!showCart)

    const mappedCartItems = cart.items.map(item => (
        <CartListItem key={kebabCase(item.name)}>
            <div>
                {item.name} - {item.quantity}
            </div>
            <div>
                <CartListItemButton onClick={createHandleRemoveItem(item.id)}>
                    -
                </CartListItemButton>
                <CartListItemButton onClick={createHandleAddItem(item)}>
                    +
                </CartListItemButton>
                <CartListItemButton
                    onClick={createHandleRemoveLineItem(item.id)}
                >
                    X
                </CartListItemButton>
            </div>
        </CartListItem>
    ))

    return (
        <CartContainer>
            <Button onClick={handleShowCart}>🛒 {cart.totalQuantity}</Button>
            {showCart && (
                <CartWrapper>
                    <CartList>
                        {mappedCartItems.length ? (
                            mappedCartItems
                        ) : (
                            <p>No items in cart.</p>
                        )}
                    </CartList>
                    <CartButtonTray>
                        <Button onClick={cartActions.clearCart}>Clear cart</Button>
                        <Button
                            disabled={!cart.hasItems}
                            onClick={handleCheckoutClick}
                        >
                            Checkout
                        </Button>
                    </CartButtonTray>
                </CartWrapper>
            )}
        </CartContainer>
    )
}

export default Cart
