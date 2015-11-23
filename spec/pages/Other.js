var OtherPage = function OtherPage() {

  this.otherButton = $('button.other-button');

  this.get = function() {
    return browser.get('other.html');
  };

  this.waitForLoaded = function() {
    return browser.wait((function(_this) {
      return _this.otherButton.isPresent();
    })(this), 30000);
  };
}

module.exports = {
  "class": OtherPage,
  name: 'Other'
};

