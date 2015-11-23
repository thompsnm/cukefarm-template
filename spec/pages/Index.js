var IndexPage = function IndexPage() {

  this.searchField = $('input.search-field');
  this.searchButton = $('button.search-button');
  this.searchSelect = $('select.search-select');
  this.searchCheckbox = $('input.search-checkbox');

  this.firstTab = $('div#tab1');
  this.secondTab = $('div#tab2');

  this.get = function() {
    return browser.get('index.html');
  };

  this.waitForLoaded = function() {
    return browser.wait((function(_this) {
      return _this.searchButton.isPresent();
    })(this), 30000);
  };
}

module.exports = {
  "class": IndexPage,
  name: 'Index'
};

