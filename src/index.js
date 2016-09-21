import { createStore, compose } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import reducers from './reducers/index';
import {
    createStoreWithRouter,
    RouterProvider,
} from 'redux-little-router';

const routes = {
  '/boop': {
    title: 'Boop',
  },
  '/': {
    title: 'Crap',
  },
  '/crap': {
    title: 'Crap',
  },
};

const container = document.getElementById('root');
const store = createStore(
  reducers,
  {},
  compose(
    createStoreWithRouter({
      routes,
      pathname: window.location.pathname,
    }),
    window.devToolsExtension ?
            window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider store={store}>
      <AppContainer />
    </RouterProvider>
  </Provider>,
container);
