import axios from 'axios';
import globals from './globals';

export const toProperCase = (str) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export const executeService= (reqType, serviceType) => {
  console.log("Req Type = " + reqType);
  console.log("Service Type = " + serviceType);
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
    case globals.serviceTypes.get:
      url += "docentries";
      break;
    default:

  }

    console.log(url);
    console.log(config);

  return axios.get(url, config);
}
