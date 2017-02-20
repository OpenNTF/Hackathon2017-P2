import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import './bootstrap/dist/css/bootstrap.css';
import './bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

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

//store.dispatch({type: 'OPEN_NOTE'});

ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  document.getElementById('root')
)
