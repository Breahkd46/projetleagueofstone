import React, { Component } from "react";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LOSRouter from './LOSRouter';

// Import pour redux
import losApp from './los-reducer/reducers';

import "./App.css";

// Creation du store pour Redux
let store = createStore(
  losApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Provider store={store}>
        <LOSRouter />
      </Provider>
    );
  }
}

export default App
