/* global Feature, Scenario */
Feature('Homepage displays');

Scenario('Visit the homepage', (I) => {
  I.amOnTheHomepage();
  I.seeTheHeader();
});
