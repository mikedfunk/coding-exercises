/* global describe, it */
import Person from '../src/Person'
import {expect} from 'chai'
describe('Feature: A person greets', () => {
  describe('Scenario: A person greets successfully', () => {
    it('Gets a persons greeting', () => {
      let person = new Person()
      const greeting = person.greet()
      expect(greeting).to.equal('hi')
    })
  })
})
