fetchprivate = require('lever-conf/fetchprivate');

const fs = require('fs');

fetchprivate ((err) => {
  conf = require('lever-conf/private');
  console.log(conf.looker)
  data = JSON.stringify(conf.looker);
  fs.writeFileSync('config.json', data);
})
