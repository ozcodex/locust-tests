const fetchprivate = require('lever-conf/fetchprivate');
const fs = require('fs');

function loadLooks(){
  
}

function writeSecrets(err){
  if (err){
    throw err;
  }
  conf = require('lever-conf/private');
  console.log("Data Acquired!");
  data = JSON.stringify(conf.looker);
  fs.writeFileSync('locust_config.json', data);
  console.log("File Written");
}

//Load secrets and save on configuration file
fetchprivate (writeSecrets);
