import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';
import { Button } from 'react-toolbox/lib/button';

class App extends Component {
  render() {
    return (
      <div className={style.App} >
        <div className={style.header}>
          <img className={style.logo} src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button label="Gato el que lee" primary />
        </p>
      </div>
    );
  }
}

export default App;
