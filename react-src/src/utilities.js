import axios from 'axios';
import globals from './globals';

export const toProperCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export const executeService= (reqType, serviceType) => {
  var config = {};

  let url = globals.apiUrl;

  switch (reqType) {
    case "get":
      config = {
        headers: {'Authorization': globals.authToken}
      };
      break;
    case "post":
      config = {
        headers: {'Authorization': globals.authToken, 'Content-Type':'application/json'}
      };
      break;
    default:
      return null;
  }

  switch (serviceType) {
    case globals.serviceTypes.create:
      url += "documents/content";
      break;
    default:

  }

  return axios.get(url, config);
}
