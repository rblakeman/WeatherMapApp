import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import './style.css';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
);
