import React, {createContext, useReducer} from 'react';
import {CartReducer, useReducer} from './CartReducer'

export const CartContext = createContext();

export const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart:[], totalProce: 0, totalQty: 0});

    return(
        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}

        </CartContext.Provider>
    )
}