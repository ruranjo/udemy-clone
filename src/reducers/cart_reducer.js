import { ADD_TO_CART,CLEAR_CART,REMOVE_CART_ITEM,GET_CART_TOTAL } from "../actions/actions"

const cart_reducer = (state, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            const tempArr = state.cart.filter((item) => item.courseID === action.payload.courseID)
            
            if(tempArr.length < 1){
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
            return {
            ...state
            }

        break;
        
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        break;

        case REMOVE_CART_ITEM:
            const tempCart = state.cart.filter(item => item.courseID !== action.payload);
            return {
                ...state,
                cart: tempCart
            }
        break;


        case GET_CART_TOTAL:
            const total_amount = state.cart.reduce((total, cartItem) => {
                total += cartItem.discounted_price;
                return total;
            }, 0);
          
            return {
                ...state,
                total_items: state.cart.length,
                total_amount
            }

        break;

        default:
            throw new Error(`No matching "${action.type}" - action type`);
        break;
      }
}

export default cart_reducer;
