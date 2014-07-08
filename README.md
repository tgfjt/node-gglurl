# gglurl

## Usage

Encode:

```
$ gglurl -e https://github.com/tgfjt/node-gglurl
```

Decode:

```
$ gglurl -d http://goo.gl/bU3VaW
```

As module:
```
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

```
$ npm install -g node-gglurl
```

## Licence
MIT

## Author
tgfjt
