/* global Feature, Scenario */

'use strict';

Feature('Homepage displays');

Scenario('Visit the homepage', (I) => {
  I.amOnTheHomepage();
  I.seeTheHeader();
});
