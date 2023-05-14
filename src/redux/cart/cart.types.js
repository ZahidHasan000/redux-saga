const CartActionTypes = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',

    //Add cart items
    ADD_ITEM: 'ADD_ITEM',

    // Remove items at checkout(increase or decrease checkout page quantity)
    REMOVE_ITEM: 'REMOVE_ITEM',

    //Remove items from cart
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',

    // Clear Cart Saga
    CLEAR_CART: 'CLEAR_CART'
};
export default CartActionTypes;