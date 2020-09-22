import * as fetchprivate from 'lever-conf/fetchprivate';
import * as fs from 'fs';
import * as request from 'request';

interface Conf {
  apiClientId: string;
  apiClientSecret: string;
  apiHost: string;
  clientSecret: string;
  host: string;
  models: string[];
  verifySSL: boolean;
  looks?: string[];
}

function loadLooks(conf: Conf): Promise<strign[]> {
  return new Promise((resolve, reject) => {
    let url: string = conf.apiHost + '/login';
    let params: { client_id: string; client_secret: string } = {
      client_id: conf.apiClientId,
      client_secret: apiClientSecret,
    };
    request({ url: url, qs: params }, function (error, response, body) {
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
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
