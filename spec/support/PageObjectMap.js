var file, files, globule, i, len, page, path;

globule = require('globule');

path = require('path');

files = globule.find('spec/pages/**/*.js');

for (i = 0, len = files.length; i < len; i++) {
  file = files[i];
  page = require(path.resolve(file));
  module.exports[page.name] = page["class"];
}

