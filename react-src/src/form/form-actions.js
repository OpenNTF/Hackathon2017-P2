import globals from '../globals';

import axios from 'axios';
import {toProperCase} from '../utilities';
import validate from 'validate.js';
import _ from 'lodash';

export const actions = {
  TEST: 'TEST'
}

export const test = () => {
  return {
    type: actions.TEST
  }
}
