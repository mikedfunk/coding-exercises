// @flow
import Sidebar from './Sidebar'

export default class Page {
  sidebar: Sidebar
  constructor (sidebar: Sidebar) {
    this.sidebar = sidebar
  }
  render (): string {
    return [
      'Hello World!',
      this.sidebar.render()
    ].join(', ')
  }
}
