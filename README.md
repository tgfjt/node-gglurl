# gglurl

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
var gglurl= require('node-gglurl');

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
