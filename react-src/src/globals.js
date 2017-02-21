let hostName = location.hostname;
let protocol = location.protocol;

let connectionsUrl = protocol + "//" + hostName + ":6010";
//let apiUrl = "http://localhost:8080/communitynotes/$darwino-jstore/databases/communitynotes/stores/notes/";
let apiUrl = "/communitynotes/$darwino-jstore/databases/communitynotes/stores/notes/";

let serviceTypes = {
  get:"get",
  save:"save"
};

const globals = {
    title:"Connections Notes",
    connectionsUrl,
    apiUrl,
    dropzoneUrl:apiUrl + "/uploadFile",
    authToken:"Basic YW1hc3M6ZGFyd2lubw==",
    username:"amass",
    password:"darwino",
    serviceTypes
};

export default globals;
