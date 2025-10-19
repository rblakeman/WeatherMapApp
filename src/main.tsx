import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './app';
import reducers from './reducers';
import './style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App />
        </Provider>
    </StrictMode>,
);
