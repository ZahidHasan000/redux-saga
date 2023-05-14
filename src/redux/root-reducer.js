import { combineReducers } from 'redux';

//Redux-persist(localStorage/sessionStorage)
import { persistReducer } from 'redux-persist';

//Redux-persist(localStorage/sessionStorage)
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

//directory state into redux
import directoryReducer from './directory/directory.reducer';

//colection state into redux
import shopReducer from './shop/shop.reducer';

//Redux-persist(localStorage/sessionStorage)
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

//Redux-persist(localStorage/sessionStorage)
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,

    //directory state into redux
    directory: directoryReducer,

    //colection state into redux
    shop: shopReducer
});

//Redux-persist(localStorage/sessionStorage)
export default persistReducer(persistConfig, rootReducer);


// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// });