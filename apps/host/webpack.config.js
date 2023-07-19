const withModuleFederation = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

module.exports = withModuleFederation({
  ...moduleFederationConfig,
  remotes: [
    ['about', '//localhost:4201'],
    ['cart', '//localhost:4202'],
    ['shop', '//localhost:4203'],
  ],
});
