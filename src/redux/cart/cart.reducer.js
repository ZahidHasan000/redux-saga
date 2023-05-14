import CartActionTypes from "./cart.types";

// import { addItemToCart } from "./cart.utils";

// Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js)
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,

    //Add cart items
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]

                // Adding multiple items to cart (cart.utils.js)
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        // Remove items at checkout(increase or decrease checkout page quantity)
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,

                // Remove items at checkout(increase or decrease checkout page quantity) after(cart.utils.js)
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };

        //Remove items from cart
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };

        // Clear Cart Saga
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }

        default:
            return state;
    }
};
export default cartReducer;