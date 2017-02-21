/* global describe, it */
import {expect} from 'chai'
import proxyquire from 'proxyquire'
// import Page from '../Page'
import Sidebar from '../Sidebar'
import sinon from 'sinon'

describe('Page', () => {
  it('renders the page', () => {
    let sandbox = sinon.sandbox.create()
    sandbox.stub(Sidebar.prototype, 'render', () => 'mysidebar')
    const Page = proxyquire('../Page', {'../Sidebar': new Sidebar()}).default
    const sidebarStub = new Sidebar()
    const page = new Page(sidebarStub)
    expect(page.render()).to.equal('Hello World!, mysidebar')
    sandbox.restore()
  })
})
