import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ListWords from './components/ListWords';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListWords />
      </Provider>
    );
  }
}

export default App;
