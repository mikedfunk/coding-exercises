/* global actor */
module.exports = () => {
  return actor({
    amOnTheHomepage () {
      this.amOnPage('/')
    },
    seeTheHeader () {
      this.see('Hello World')
    }
  })
}
