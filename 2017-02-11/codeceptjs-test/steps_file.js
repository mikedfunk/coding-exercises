/* global actor */

'use strict';

// in this file you can append custom step methods to 'I' object
module.exports = function exports() {
  return actor({
    amOnTheHomePage() {
      this.amOnPage('/');
    },
    seeTheHeader() {
      this.see('Hello World');
    },
  });
};
