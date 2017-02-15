/* global Feature, Scenario */

Feature('Homepage displays');

Scenario('test something', (I) => {
  I.amOnTheHomepage();
  I.seeTheHeader();
});
