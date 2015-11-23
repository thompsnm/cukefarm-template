module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    protractor: 'grunt-protractor-runner',
    connect: 'grunt-contrib-connect'
  });
  grunt.initConfig({
    protractor: {
      options: {
        configFile: "./spec/conf/protractor.conf.js"
      },
      chrome: {
        options: {
          args: {
            browser: 'chrome'
          }
        }
      }
    },
    shell: {
      webdriverManagerUpdate: {
        command: "node_modules/.bin/webdriver-manager update"
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'www-data'
        }
      }
    }
  });
  grunt.registerTask('test', ['shell:webdriverManagerUpdate', 'protractor:chrome']);
  return grunt.registerTask('default', ['connect', 'test']);
};

