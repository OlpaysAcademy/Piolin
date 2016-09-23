// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStoreWithRouter, RouterProvider } from 'redux-little-router';

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
  createStoreWithRouter({
    routes,
    pathname: '/login'
  })
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
