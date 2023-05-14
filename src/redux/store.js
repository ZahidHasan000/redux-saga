import { createStore, applyMiddleware } from 'redux';

//Redux-persist(localStorage/sessionStorage)
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

// Redux thunk
// import thunk from 'redux-thunk';   (reason for redux-saga middleware)

//reason for Redux-saga
import createSagaMiddleware from 'redux-saga';
// import { fetchCollectionsStart } from './shop/shop.sagas'; //reason for Root saga

import rootReducer from './root-reducer';

// reason for Root saga
import rootsaga from './root-saga';

//reason for redux-saga
const sagaMiddleware = createSagaMiddleware();


//Optimizing production build
// const middlewares = [];

// Redux thunk
// const middlewares = [thunk];

//Reason for redux-saga
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
};

//Redux-persist(localStorage/sessionStorage)
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Reason for redux-saga
// sagaMiddleware.run(fetchCollectionsStart);  //Reason for Root saga

//Reason for Root saga
sagaMiddleware.run(rootsaga);

//Redux-persist(localStorage/sessionStorage)
export const persistor = persistStore(store)

// const store = createStore(rootReducer, applyMiddleware(...middlewares))

//Redux-persist(localStorage/sessionStorage)
// export default { store, persistor };

// export default store;