var config = require('cukefarm').config;

config.specs = '../features/**/*.feature';

config.capabilities.browserName = 'chrome';

config.cucumberOpts.require.push('../support/World.js');

config.baseUrl = 'http://localhost:9001/';

exports.config = config;

