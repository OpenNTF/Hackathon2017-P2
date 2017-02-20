import globals from '../globals';

import axios from 'axios';
import {toProperCase} from '../utilities';
import validate from 'validate.js';
import _ from 'lodash';

export const actions = {
  OPEN_NOTE: 'OPEN_NOTE',
  CLOSE_NOTE: 'CLOSE_NOTE'
}

export const openNote = () => {
  return {
    type: actions.OPEN_NOTE
  }
}

export const closeNote = () => {
  return {
    type: actions.CLOSE_NOTE
  }
}
