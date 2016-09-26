import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import reducers from './reducers/index';
import {
    initializeCurrentLocation,
    createStoreWithRouter,
    RouterProvider,
} from 'redux-little-router';
import routes from './routes/index';

const container = document.getElementById('root');
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(promise),
    createStoreWithRouter({
      routes,
      pathname: window.location.pathname,
    }),
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
      <AppContainer />
    </RouterProvider>
  </Provider>,
container);
