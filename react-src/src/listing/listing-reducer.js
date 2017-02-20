import listingState from './listing-state';
import {actions} from './listing-actions';

const listing = (state = listingState, action) => {
  switch (action.type) {
    case actions.TEST:
      return Object.assign({}, state, {
          data:[]
      });
    default:
      return state
  }
}

export default listing;
