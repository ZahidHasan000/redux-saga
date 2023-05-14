
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Add cart items
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

// Remove items at checkout(increase or decrease checkout page quantity)
export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

//Remove items from cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

// Clear Cart Saga
export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});