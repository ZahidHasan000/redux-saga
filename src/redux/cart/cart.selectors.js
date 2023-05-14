import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//user selector
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//another selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
);

//reason for checkout page 2
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
);