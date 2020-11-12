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
    // Cart State
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
        return total
    }, 0)

    const cart = {
        hasItems: state.items.length > 0,
        items: state.items,
        totalCost,
        totalQuantity
    }

    // Actions
    const addToCart = (product: any, quantity: number) => {
        dispatch(addToCartHandler(product, quantity))
    }
    const clearCart = () => dispatch(clearCartHandler())
    const removeItem = id => dispatch(removeItemHandler(id))
    const removeLineItem = id => dispatch(removeLineItemHandler(id))

    const cartActions = {
        addToCart,
        clearCart,
        removeItem,
        removeLineItem
    }

    return [cart, cartActions]
}

export default useCart
