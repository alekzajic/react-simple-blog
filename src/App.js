import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';

import configureStore from './store';
import { rootSaga } from './sagas';

const store = configureStore();

store.runSaga(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr /> 
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
