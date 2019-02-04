import React, { Component } from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LOSRouter from './LOSRouter';

// Import for Redux
import losApp from '../los-reducer/reducers';

import '../stylesheets/App.css';

// Creation of store for Redux
let store = createStore(
  losApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <LOSRouter />
      </Provider>
    );
  }
}

export default App
