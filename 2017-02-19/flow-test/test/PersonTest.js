/* global it */
import sinon from 'sinon'
import {expect} from 'chai'
import Person from '../Person'
import Head from '../Head'
import Arm from '../Arm'

it('greets - stub', () => {
  // this is most useful when just just want to set what it returns
  let sandbox = sinon.sandbox.create()
  sandbox.stub(Head.prototype, 'nod', () => 'nods')
  sandbox.stub(Arm.prototype, 'wave', () => 'waves')
  const head = new Head()
  const arm = new Arm()
  const person = new Person(head, arm)
  expect(person.greet()).to.equal('nods, waves')
  sandbox.restore()
})

it('greets - mock', () => {
  // this is more useful when something just needs to be called x number of
  // times, optionally with args, but you don't care what it returns
  let headNodMock = sinon.mock(Head.prototype).expects('nod').once()
  let armWaveMock = sinon.mock(Arm.prototype).expects('wave').once()
  const head = new Head()
  const arm = new Arm()
  const person = new Person(head, arm)
  const result = person.greet()
  expect(result).to.equal(', ')
  headNodMock.verify()
  armWaveMock.verify()
  Head.prototype.nod.restore()
  Arm.prototype.wave.restore()
})

it('greets - stub instance', () => {
  // this just stubs all methods to return nothing. not that useful because you
  // can't specify what they return!
  const head = sinon.createStubInstance(Head)
  const arm = sinon.createStubInstance(Arm)
  const person = new Person(head, arm)
  expect(person.greet()).to.equal(', ')
})

it('greets - spy', () => {
  // like mocking but should haves are at the end
  sinon.spy(Head.prototype, 'nod')
  sinon.spy(Arm.prototype, 'wave')
  const head = new Head()
  const arm = new Arm()
  const person = new Person(head, arm)
  person.greet()
  expect(arm.wave.called)
  expect(head.nod.called)
  Head.prototype.nod.restore()
  Arm.prototype.wave.restore()
})
