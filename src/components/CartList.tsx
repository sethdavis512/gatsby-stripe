import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
    margin-bottom: 12px;
    padding-bottom: 11px;

    :not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.primary};
    }
`

const CartListItemButton = styled(Button)`
    padding: 0.5rem;
    border-radius: 4px;
    margin-right: 4px;
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
                                <FontAwesomeIcon icon={faMinus} />
                            </CartListItemButton>
                            <CartListItemButton
                                onClick={createHandleAddItem(item)}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </CartListItemButton>
                            <CartListItemButton
                                onClick={createHandleRemoveLineItem(item.id)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
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
