import React from 'react';
import { Fragment, Link } from 'redux-little-router';
import auther from './utils/auth';

const App = () => (
  <div>
    <h3>Crapio</h3>
    <button onClick={auther.getTimeline}>Crapper</button>
    <Link href="/boop">
      <button>To Boop</button>
    </Link>
    <Link href="/crap">
      <button>To Crap</button>
    </Link>
    <Fragment forRoute="/boop">
      <h2>onboop</h2>
    </Fragment>
    <Fragment forRoute="/crap">
      <h2>oncrap</h2>
    </Fragment>
  </div>
);
export default App;
