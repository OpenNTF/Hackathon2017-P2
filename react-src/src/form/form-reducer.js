import formState from './form-state';
import {actions} from './form-actions';

const form = (state = formState, action) => {
  switch (action.type) {
    case actions.TEST:
      return Object.assign({}, state, {
          data:{}
      });
    default:
      return state
  }
}

export default form;
