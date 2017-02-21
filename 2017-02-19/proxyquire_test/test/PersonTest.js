/* global it */
import {expect} from 'chai'
import proxyquire from 'proxyquire'
// import sinon from 'sinon'
it('tests', () => {
  const armStub = { wave () { return '1waves' } }
  const headStub = { nod () { return '1nods' } }
  const Person = proxyquire('../Person', { '../Arm': armStub, './Head': headStub }).default
  // console.log(Person)
  const person = new Person(armStub, headStub)
  expect(person.greet()).to.equal('1waves, 1nods')
})
