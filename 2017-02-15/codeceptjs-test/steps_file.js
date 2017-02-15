
/* global actor */
// in this file you can append custom step methods to 'I' object

module.exports = function exp() {
  return actor({
    amOnTheHomepage() {
      this.amOnPage('/');
    },
    seeTheHeader() {
      this.see('hello world');
    },
  });
};
