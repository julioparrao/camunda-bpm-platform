'use strict';

var Page = require('../../page');

var navigationSection = element(by.css('[id="cam-tasklist-navigation"]'));

module.exports = Page.extend({

  pageHeader: function() {
    return element(by.css('.navbar-header')).getText();
  },

  selectNavbarItem: function(navbarItem) {
    var index = [
      'Process',
      'Account',
      'Webapps'
    ];
    var item;
    var itemIndex = index.indexOf(navbarItem) + 1;

    if (itemIndex)
      item = navigationSection.element(by.css('.navbar ul li:nth-child(' + itemIndex + ')'));
    else
      item = navigationSection.element(by.css('.navbar ul li:nth-child(1)'));

    item.click();
    return item;
  }

});