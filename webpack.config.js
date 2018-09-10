const merge = require('lodash/merge');
const base = require('./webpack.base');

function mkCfg(overrides = {}) {
  return merge(base(), overrides);
}

module.exports = [
  mkCfg({mode: 'development'}),
  mkCfg({mode: 'production', output: {filename: 'bundle.umd.min.js'}})
];
