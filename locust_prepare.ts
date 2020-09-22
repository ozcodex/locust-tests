const fetchprivate = require('lever-conf/fetchprivate');
const fs = require('fs');
const request = require('request');

interface Conf {
  
}

function loadLooks(conf) {
  return new Promise((resolve, reject) => {
    request('http://www.google.com', function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  });
}

function writeSecrets(err: Error) {
  if (err) {
    throw err;
  }
  let conf: Conf = require('lever-conf/private').looker;
  console.log('Data Acquired!');
  //having the data requite the looks
  loadLooks(conf).then((looks) => {
    conf['looks'] = looks;
    data = JSON.stringify(conf);
    fs.writeFileSync('locust_config.json', data);
    console.log('File Written');
  });
}

//Load secrets and save on configuration file
fetchprivate(writeSecrets);
