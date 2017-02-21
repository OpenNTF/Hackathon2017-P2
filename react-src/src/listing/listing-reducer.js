import listingState from './listing-state';
import {actions} from './listing-actions';

const listing = (state = listingState, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return Object.assign({}, state, {
          data:action.data
      });
    default:
      return state
  }
}

export default listing;
