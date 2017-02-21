/* global actor */
module.exports = () => {
  return actor({
    amOnTheHomepage () {
      this.amOnPage('/')
    },
    seeTheHeader () {
      this.see('Hello World')
    }

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  })
}
