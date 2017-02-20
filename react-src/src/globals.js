let hostName = location.hostname;
let protocol = location.protocol;

let connectionsUrl = protocol + "//" + hostName + ":6010";
let apiUrl = protocol + "//" + hostName + ":6010";

const globals = {
    title:"Connections Notes",
    connectionsUrl,
    apiUrl,
    dropzoneUrl:apiUrl + "/uploadFile"
};

export default globals;
