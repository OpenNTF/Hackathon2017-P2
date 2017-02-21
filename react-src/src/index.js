import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {getData} from './core/core-actions';
import {actions} from './listing/listing-actions';
import thunk from 'redux-thunk';
import './bootstrap/dist/css/connection-notes.css';
import './index.css';
import './dropzone.min.css';

/*
  React Tap Plugin for Tap events on mobile
*/
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*
	Custom Components Import
*/
import main from './core/core-app-reducer';
import listing from './listing/listing-reducer';
import form from './form/form-reducer';
import AppContainer from './core/containers/app-container'

//Setup Reducers
const indexReducerWrapper = combineReducers({
  main,
  listing,
  form
});

//Create Store with Middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(indexReducerWrapper,
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

getData()
.then(function (response) {
    store.dispatch({type: actions.GET_DATA, data:response.data});
})
.catch(function (error) {
  console.log(error);
  return null;
});

ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  document.getElementById('root')
)
