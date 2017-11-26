import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TemplateContainer from './containers/TemplateContainer';
import DefaultLayout from './template/DefaultLayout';
import servicosReducer from './reducers/servicosReducer';
import accessibilityReducer from './reducers/accessibilityReducer';
import './app.css';

const reducers = combineReducers({servicosReducer, accessibilityReducer});

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    console.log(store.getState().accessibilityReducer);
    return (
      <Provider store={store}>
        <TemplateContainer/>
      </Provider>
    );
  }
}

export default App;
