import { useContext } from 'react'
import numeral from 'numeral'
import {
    addToCartHandler,
    clearCartHandler,
    removeItemHandler,
    removeLineItemHandler
} from '../contexts/cart/cartActions'
import { CartContext } from '../contexts/cart/CartProvider'

const useCart = () => {
    // State
    const { state, dispatch } = useContext(CartContext)

    const totalQuantity = state.items.reduce(
        (total, currentItem) => (total += currentItem.quantity),
        0
    )

    const totalCost = state.items.reduce((total, currentItem) => {
        if (currentItem && currentItem.price && currentItem.quantity) {
            total += numeral(currentItem.price)
                .multiply(currentItem.quantity)
                .divide(100)
                .value()
        }
        return total;
    }, 0)

    // Actions
    const addToCart = (product: any, quantity: number) =>
        dispatch(addToCartHandler(product, quantity))

    const clearCart = () => dispatch(clearCartHandler())

    const removeItem = productId => dispatch(removeItemHandler(productId))

    const removeLineItem = productId =>
        dispatch(removeLineItemHandler(productId))

    const cart = {
        hasItems: state.items.length > 0,
        items: state.items,
        totalCost,
        totalQuantity
    }

    const cartActions = {
        addToCart,
        clearCart,
        removeItem,
        removeLineItem
    }

    return [cart, cartActions]
}

export default useCart
