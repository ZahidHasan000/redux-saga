// import SHOP_DATA from "./shop.data";

// Adding shop data to redux
import ShopActionTypes from "./shop.types";

// withSpinner HOC (After deleteing shop.data.js in redux folder in shop folder)
const INITIAL_STATE = {
    collections: null,

    // reason for Redux thunk
    isFetching: false,
    errorMessage: undefined
};

// Adding shop data to redux
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // reason for Redux thunk
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        // reason for Redux thunk
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        // reason for Redux thunk
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
};

export default shopReducer;