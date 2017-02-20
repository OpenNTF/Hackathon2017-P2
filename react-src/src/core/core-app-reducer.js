import appState from './core-app-state';
import {actions} from './core-actions';

const main = (state = appState, action) => {
  console.log("Hello");
  switch (action.type) {
    case actions.OPEN_NOTE:
      return Object.assign({}, state, {
          app:'form'
      });
    case actions.CLOSE_NOTE:
      return Object.assign({}, state, {
          app:'main'
      });
    default:
      return state
  }
}

export default main;
