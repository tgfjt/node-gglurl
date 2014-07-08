# gglurl

Wrapper Google UrlShortner for cmd & commonJS module.

[![Build Status](https://travis-ci.org/tgfjt/node-gglurl.svg?branch=master)](https://travis-ci.org/tgfjt/node-gglurl)
[![NPM version](https://badge.fury.io/js/node-gglurl.svg)](http://badge.fury.io/js/node-gglurl)

## Usage

Encode:

```bash
$ gglurl -e https://github.com/tgfjt/node-gglurl
```

Decode:

```bash
$ gglurl -d http://goo.gl/bU3VaW
```

As module:

```javascript
var gglurl = require('node-gglurl');

gglurl.decode(function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log(res);
	}
}, '<url>');
```

## Install

```bash
$ npm install -g node-gglurl
```

## Licence
MIT

## Author
tgfjt
