// reason for Root saga
import { all, call } from 'redux-saga/effects';
// import { fetchCollectionsStart } from './shop/shop.sagas';

// Clear Cart Saga
import { shopSagas } from './shop/shop.sagas';

// Google Sign in into Sagas
import { userSagas } from './user/user.sagas';

// Clear Cart Saga
import { cartSagas } from './cart/cart.sagas';

export default function* rootsaga() {
    // yield all([call(fetchCollectionsStart)]);

    // Google Sign in into Sagas
    // yield all([call(fetchCollectionsStart), call(userSagas)]);

    // Clear Cart Saga
    yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}