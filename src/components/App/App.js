// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createStoreWithRouter, RouterProvider } from 'redux-little-router';
import ReduxPromise from 'redux-promise';

import AppContent from '../AppContent';
import app from '../../reducers';

const routes = {
  '/login': {
    title: 'Login'
  },
  '/app': {
    title: 'App'
  },
  '/app/tweets': {
    title: 'Tweets'
  },
  '/app/tweets/create': {
    title: 'Create Tweets'
  },
  '/app/followers': {
    title: 'Followers'
  },
  '/app/following': {
    title: 'Following'
  }
};

let store = createStore(
  app,
  {},
  compose(
    applyMiddleware(ReduxPromise),
    createStoreWithRouter({
      routes,
      pathname: window.location.pathname
    }),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterProvider store={store}>
          <AppContent />
        </RouterProvider>
      </Provider>
    );
  }
}

export default App;
