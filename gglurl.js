var googleapis = require('googleapis');

var encode = function(client, longUrl, cb) {
  'use strict';

  client.urlshortener.url
    .insert({longUrl: longUrl})
    .execute(cb);
};

var decode = function(client, shortUrl, cb) {
  'use strict';

  client.urlshortener.url
    .get({shortUrl: shortUrl})
    .execute(cb);
};

var gglurl = {
  encode: function(callback) {
    'use strict';

    var uriArray = Array.prototype.slice.call(arguments, 1);

    googleapis
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {

        uriArray.forEach(function(uri) {
          encode(client, uri, callback);
        });
      });
  },

  decode: function(callback) {
    'use strict';

    var uriArray = Array.prototype.slice.call(arguments, 1);

    googleapis
      .discover('urlshortener', 'v1')
      .execute(function(err, client) {

        uriArray.forEach(function(uri) {
          decode(client, uri, callback);
        });
      });
  }
};

module.exports = gglurl;
