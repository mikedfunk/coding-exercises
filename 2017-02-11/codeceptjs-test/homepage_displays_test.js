/* global Feature, Scenario */
Feature('Homepage displays');

Scenario('The homepage should display', (I) => {
  I.amOnTheHomePage();
  I.seeTheHeader();
});
