# Mechanical Bird

[![Travis](https://img.shields.io/travis/passcod/mechanicalbird.svg?style=flat-square)](https://travis-ci.org/passcod/mechanicalbird)
[![License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://spdx.org/licenses/ISC.html)

_A timer and work tracker. Sometimes the simpler things are best._

![Screenshot](https://cloud.githubusercontent.com/assets/155787/17456706/7be4d8ca-5c35-11e6-9eb0-5a44f1d2ed28.png)

## Use

It's available at https://mechanicalbird.surge.sh.

To start, click the big triangle "play" button in the top right corner. To
stop, click the now-square "stop" button. You can edit the description of any
entry made today, simply by clicking on the text and editing it right there.
You can close and reload the page — it will keep its state. Be aware that means
the timer will keep "running" in the background!

## Features / details

Only modern browsers are expected to work: Firefox, Chrome, Edge, Safari 10+.
However, at the moment I develop this only on Firefox Nightly, all other
browsers are untested; do open issues if there are problems, though!

Why such a small set of target browsers? Because I compile only the minimum of
ES2015 and CSS3/4 features I need. As browsers evolve, I will drop even more
compilation steps, until finally the code can run virtually untouched.

All data is persisted to local storage. Note that this means it will not work
in Safari Private Browsing mode. A sync and backup server is being developed:
it will be fully encrypted, as in your data will never be readable by anyone
but you (and people with access to your browser), and will not need email nor
password.

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
