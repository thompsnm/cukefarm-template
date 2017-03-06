var World = require('cukefarm').World;
var {defineSupportCode} = require('cucumber');

World.prototype.pageObjectMap = require('./PageObjectMap');

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(World);
});
