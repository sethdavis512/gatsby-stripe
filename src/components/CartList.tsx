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
    CartUnorderedList
} from './styles/CartListStyles'

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
                        <div>{item.name}</div>
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
