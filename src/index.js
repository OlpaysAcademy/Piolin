// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux';
import { RouterProvider } from 'redux-little-router';
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router';

import App from './components/App';
import reducers from './reducers';
import routes from './routes';

const routerEnhancer = createStoreWithRouter({
    // The configured routes. Required.
    routes,
    pathname: window.location.pathname,
})

const store = createStore(
    reducers,
    {},
    compose(
        routerEnhancer,
        window.devToolsExtension ?
            window.devToolsExtension() : f => f
    )
);

const initialLocation = store.getState().router;
if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
}

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider store={store}>
            <App />
        </RouterProvider>
    </Provider>,
    document.getElementById('root')
);
