# Mechanical Bird

[![Travis](https://img.shields.io/travis/passcod/mechanicalbird.svg?style=flat-square)](https://travis-ci.org/passcod/mechanicalbird)
[![License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://spdx.org/licenses/ISC.html)

_A timer and work tracker. Sometimes the simpler things are best._

![Screenshot](https://cloud.githubusercontent.com/assets/155787/17456706/7be4d8ca-5c35-11e6-9eb0-5a44f1d2ed28.png)

## Use

It's available at https://mechanicalbird.surge.sh.

Only modern browsers are supported: Firefox, Chrome, Edge, Safari 10+. I develop
on Firefox Nightly, YMMV. Why such restrained support? Because I compile only
the minimum of ES2015 and CSS3/4 features I need.

All data is persisted to local storage.

## Develop

```
$ git clone passcod/mechanicalbird
$ cd mechanicalbird
$ npm install
$ npm start -s

# Then, in another terminal pane:
$ npm watch -s

# Finally, in your browser:
$ open http://localhost:8181
```

## Deploy

Automatically:

```
$ git push
```

Manually:

```
$ npm run deploy -s
```

To your own [Surge](https://surge.sh):

```
$ npm test
$ npm run build -s
$ surge ./dist
```
