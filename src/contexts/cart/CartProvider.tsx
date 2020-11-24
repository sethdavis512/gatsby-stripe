import React, { createContext, ReactNode, useReducer, useEffect } from 'react'

import { cartReducer } from './cartReducer'
import useLocalStorage from '../../hooks/useLocalStorage'

interface CartProviderProps {
    children: ReactNode
    providerValue?: any
}

export const CartContext = createContext({
    state: {
        items: []
    },
    dispatch: () => {}
})

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const initialState = {
        items: []
    }
    const [localStorage, setLocalStorage] = useLocalStorage(
        'cart',
        initialState
    )
    const [state, dispatch] = useReducer(cartReducer, localStorage) as any
    const stringifiedState = JSON.stringify(state)

    useEffect(() => {
        setLocalStorage(state)
    }, [stringifiedState])

    const providerValues = {
        state,
        dispatch
    }

    return (
        <CartContext.Provider value={providerValues}>
            {children}
        </CartContext.Provider>
    )
}
