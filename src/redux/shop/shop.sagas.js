// import { takeEvery } from 'redux-saga/effects';

//Root saga
// import { takeLatest, call, put } from 'redux-saga/effects';


import { takeLatest, call, put, all } from 'redux-saga/effects';

// redux thunk into saga
// import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync() {
    // yield console.log('I am fired');

    // redux thunk into saga
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }

    // promise pattern
    // collectionRef.get().then((snapshot) => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}
export function* fetchCollectionsStart() {
    // yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);

    //Root saga
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};

// Clear Cart Saga
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
};