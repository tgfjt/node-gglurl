var program = require('commander');

var gglurl = require('../gglurl.js');

program
  .version('0.0.1')
  .option('-d, --decode <url>..<url>', 'decode shorturl to longurl.')
  .option('-e, --encode <url>', 'encode longurl to shorturl.')
  .parse(process.argv);

console.log('google shorturl parse:');

if (program.decode) {
  gglurl.decode(function(err, result) {
    'use strict';

    if (err) {
      return console.log('decode error:', err);
    } else {
      return console.log(result.longUrl);
    }
  }, program.decode);
}

if (program.encode) {
  gglurl.encode(function(err, result) {
    'use strict';

    if (err) {
      return console.log('encode error:', err);
    } else {
      return console.log(result.id);
    }
  }, program.encode);
}
