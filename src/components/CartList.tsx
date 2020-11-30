import React from 'react'
import styled from 'styled-components'

import Button from './Button'

import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'

const CartUnorderedList = styled.ul`
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

const CartList = ({ items }) => {
    const [, cartActions] = useCart()

    const createHandleAddItem = product => () => {
        cartActions.addToCart(product, 1)
    }

    const createHandleRemoveItem = id => () => {
        cartActions.removeItem(id, 1)
    }

    const createHandleRemoveLineItem = id => () => {
        cartActions.removeLineItem(id)
    }

    return (
        <CartUnorderedList>
            {items && items.length ? (
                items.map(item => (
                    <CartListItem key={getUniqueId(item.name)}>
                        <div>
                            {item.name} - {item.quantity}
                        </div>
                        <div>
                            <CartListItemButton
                                onClick={createHandleRemoveItem(item.id)}
                            >
                                -
                            </CartListItemButton>
                            <CartListItemButton
                                onClick={createHandleAddItem(item)}
                            >
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
            ) : (
                <li>No items in cart.</li>
            )}
        </CartUnorderedList>
    )
}

export default CartList
