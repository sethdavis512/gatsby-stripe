import React, { useState } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'

import useCart from '../hooks/useCart'
import Button from './Button'
import CartList from './CartList'

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

const CartButtonTray = styled.div`
    display: flex;
    justify-content: space-between;
`

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Cart = ({ meta }) => {
    const [cart, cartActions] = useCart()

    const handleCheckoutClick = async () => {
        const stripe = await stripePromise

        const lineItems = cart.items.map((item: any) => ({
            price: item.id,
            quantity: item.quantity
        }))

        const urlBase = `${window.location.origin}${meta.pathPrefix}`
        const successUrl = `${urlBase}/success`
        const cancelUrl = `${urlBase}/cancel`;

        const { error } = await stripe.redirectToCheckout({
            lineItems,
            mode: 'payment',
            successUrl,
            cancelUrl
        })
    }

    const [showCart, setShowCart] = useState(false)
    const handleShowCart = () => setShowCart(!showCart)

    return (
        <CartContainer>
            <Button onClick={handleShowCart}>🛒 {cart.totalQuantity}</Button>
            {showCart && (
                <CartWrapper>
                    <CartList items={cart.items} />
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
