import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//Redux-persist(localStorage/sessionStorage)
import { PersistGate } from 'redux-persist/lib/integration/react';

//Redux-persist(localStorage/sessionStorage)
import { store, persistor } from './redux/store';

import './index.css';
import App from './App';

// import store from './redux/store';

//Redux-persist(localStorage/sessionStorage)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
