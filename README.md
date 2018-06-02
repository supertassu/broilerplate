# Tassu's Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/supertassu/broilerplate.svg)](https://greenkeeper.io/)

A boilerplate for Koa and React, utilizing AVA and XO for testing and code style.
This is a grab-and-go style starter kit for any web development project for me.

## Setup & usage

```bash
# setup
git clone https://github.com/supertassu/broilerplate project-name
cd project-name
npm install

# usage
npm run dev # starts webpack in watch mode, starts web server and starts xo and ava in watch mode
npm run build && npm test && npm start # builds files, runs tests and starts web server
```

### Heroku
Broilerplate works on Heroku. Just use the `heroku/heroku-buildpack-nodejs` buildpack.

### Now.sh
Broilerplate works on Now.sh by default. No configuration needed.

## TODO

- [ ] Support HTTPS
