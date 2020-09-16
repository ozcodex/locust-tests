fetchprivate = require('lever-conf/fetchprivate');
fetchprivate ((err) => {
  conf = require('lever-conf/private');
  console.log(conf.looker)
})
