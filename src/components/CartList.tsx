import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import Button from './Button'

import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'

const CartUnorderedList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: ${({ theme }) => theme.borderRadius};
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
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    margin-right: 4px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.primary};
`

const CartListRemoveButton = styled(CartListItemButton)`
    color: ${({ theme }) => theme.red};
    border: 1px solid ${({ theme }) => theme.red};

    :hover {
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.red};
        border-color: ${({ theme }) => theme.red}
    }
`

const CartQuantityTag = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 100px;
    color: ${({ theme }) => theme.white};
    font-size: 1rem;
    justify-content: center;
`

const CartQuantityTagInner = styled.div`
    font-size: 0.8rem;
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
                        <CartQuantityTag>
                            <CartQuantityTagInner>
                                {item.quantity}
                            </CartQuantityTagInner>
                        </CartQuantityTag>
                        <div>
                            {item.name}
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
                            <CartListRemoveButton
                                onClick={createHandleRemoveLineItem(item.id)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </CartListRemoveButton>
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
