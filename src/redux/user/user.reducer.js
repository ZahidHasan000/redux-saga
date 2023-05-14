// import { userActionTypes } from "./user.types";

// const INITIAL_STATE = {
//     currentUser: null
// };
// const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         // case 'SET_CURRENT_USER':
//         case userActionTypes.SET_CURRENT_USER:
//             return {
//                 ...state,
//                 currentUser: action.payload
//             }

//         default:
//             return state;
//     };

// };


// Google Sign in into sagas
import userActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        // case userActionTypes.EMAIL_SIGN_IN_SUCCESS:

        // Code refatoring in Email Sign in into Sagas
        case userActionTypes.SIGN_IN_SUCCESS:
        case userActionTypes.SIGN_UP_SUCCESS:

            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        // case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
        // case userActionTypes.EMAIL_SIGN_IN_FAILURE:

        // Sign Out With Sagas
        case userActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };

        // Code refatoring in Email Sign in into Sagas
        case userActionTypes.SIGN_IN_FAILURE:
        // break  //break dile kno issue thake na termila e

        // Sign Out with Sagas
        case userActionTypes.SIGN_OUT_FAILURE:

        // Solution Sign Up Saga
        case userActionTypes.SIGN_UP_FAILURE:

            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    };
};

export default userReducer;