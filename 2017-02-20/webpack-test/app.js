// @flow
import Page from './Page'
import Sidebar from './Sidebar'

const sidebar: Sidebar = new Sidebar()
const page: Page = new Page(sidebar)
const appEl = document.getElementById('app')
if (!appEl) {
  // return
}
appEl.innerHTML = '<h1>' + page.render() + '</h1>'
