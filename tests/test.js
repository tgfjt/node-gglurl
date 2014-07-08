var test = require('tape');

var gglurl = require('../gglurl');

var logit = function(err, res) {
  if (err) {
    return console.log(err);
  } else {
    return console.log(res);
  }
};

test('gglurl test', function (t) {
  t.plan(4);

  gglurl.encode(function(err, res) {
    t.equal(res.id, 'http://goo.gl/rgk0B');
  }, 'http://www.tagpanda.co.jp/');

  gglurl.decode(function(err, res) {
    t.equal(res.longUrl, 'http://www.tagpanda.co.jp/');
  }, 'http://goo.gl/rgk0B');

  gglurl.encode(function(err) {
    t.error();
  }, 'http://www.tagpanda.co.jp\!');

  gglurl.decode(function(err) {
    t.error();
  }, 'http://goo.gl/rgk0BBBBBBBBBBBBBBBBBB');
});
