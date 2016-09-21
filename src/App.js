import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createStoreWithRouter, RouterProvider, RelativeFragment as Fragment } from 'redux-little-router';

import app from './reducers';
import logo from './logo.svg';
import style from './App.scss';

const routes = {
  '/': {
    title: 'Home'
  },
  '/login': {
    title: 'Login'
  },
  '/tweets': {
    title: 'Tweets'
  }
};

let store = createStore(
  app, // reducer
  {}, // initial state
  createStoreWithRouter({
    routes,
    pathname: '/login'
  })
);

const Gilada = ({ router }) =>
  <Fragment forRoute={'/'}>
    <div className={style.App} >
      <div className={style.header}>
        <img className={style.logo} src={logo} alt="logo" />
        <h2>{router.result.title}</h2>
      </div>
    </div>
    <Fragment forRoute={'/login'}>
      <Button onClick={() => store.dispatch({ type: 'ROUTER_PUSH', payload: '/tweets' })}>
        Log in
      </Button>
    </Fragment>
    <Fragment forRoute={'/tweets'}>
      <Button onClick={() => store.dispatch({ type: 'ROUTER_PUSH', payload: '/login' })}>
        Log out
      </Button>
    </Fragment>
  </Fragment>

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterProvider store={store}>
          <Gilada />
        </RouterProvider>
      </Provider>
    );
  }
}

export default App;
