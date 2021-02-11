import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import useCart from '../hooks/useCart'
import { getUniqueId } from '../utils'
import {
    CartListItem,
    CartListItemButton,
    CartQuantityTag,
    CartQuantityTagInner,
    CartUnorderedList,
    CartListRemoveButton
} from './styles/CartStyles'
import { Button, Flex } from './styles/CommonStyles'

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
                        <Flex align="flex-start">
                            <CartQuantityTag>
                                <CartQuantityTagInner>
                                    {item.quantity}
                                </CartQuantityTagInner>
                            </CartQuantityTag>
                            <div>
                                {item.name} - $
                                {((item.quantity * item.price) / 100).toFixed(
                                    2
                                )}
                            </div>
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
                        </Flex>
                    </CartListItem>
                ))
            ) : (
                <li>No items in cart.</li>
            )}
        </CartUnorderedList>
    )
}

export default CartList
