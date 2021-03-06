import { CartActionTypes } from './CartActionTypes'

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case CartActionTypes.ADD_TO_CART:
            const existingItemIndex = state.items.findIndex(
                item => item.id === payload.product.id
            )

            // Update quantity
            if (existingItemIndex > -1) {
                const newState = {
                    items: [...state.items]
                }
                newState.items[existingItemIndex].quantity += payload.quantity

                return newState
            }

            // Add new item to cart
            const appendedProduct = {
                ...payload.product,
                quantity: payload.quantity
            }

            return {
                items: [...state.items, appendedProduct]
            }

        case CartActionTypes.REMOVE_LINE_ITEM:
            return {
                items: state.items.filter(item => item.id !== payload.id)
            }

        case CartActionTypes.REMOVE_ITEM:
            const items = state.items.reduce((acc, item) => {
                if (item.id === payload.id) {
                    const newQuantity = item.quantity - payload.quantity

                    return newQuantity > 0
                        ? [...acc, { ...item, quantity: newQuantity }]
                        : [...acc]
                }
                return [...acc, item]
            }, [])

            return {
                items
            }

        case CartActionTypes.CLEAR_CART:
            return {
                items: []
            }

        default:
            return Error('Action type is not defined.')
    }
}
