import { ADD_TO_CART,CLEAR_CART,REMOVE_CART_ITEM,GET_CART_TOTAL } from "../actions/actions"
import { createContext, useContext, useEffect, useReducer } from "react"
import reducer from '../reducers/cart_reducer'
const loadCartFromStorage = () => {
    let cart = localStorage.getItem('cart-udemy');
    if(cart){
        return JSON.parse(localStorage.getItem('cart-udemy'));
    } else {
        return [];
    }
}

const initialState = {
    cart: loadCartFromStorage(),
    total_items: 0,
    total_amount: 0
}

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (courseID, image, course_name, creator, discounted_price, category) => {
        dispatch({type: ADD_TO_CART, payload: {
            courseID, image, course_name, creator, discounted_price, category
        }});
    }

    const removeFromCart = (id) => {
        dispatch({type: REMOVE_CART_ITEM, payload: id});
    }

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    useEffect(() => {
        dispatch({type: GET_CART_TOTAL});
        localStorage.setItem('cart-udemy', JSON.stringify(state.cart))
    }, [state.cart]);

    return (
        <CartContext.Provider value = {{
            ...state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}


export const useCartContext = () => {
    return useContext(CartContext);
}
