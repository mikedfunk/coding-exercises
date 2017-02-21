// @flow
import {inject} from 'dependency-injection-es6'
import Arm from './Arm'
import Head from './Head'

/**
 * A person can do stuff.
 */
@inject(Head, Arm)
export default class Person {

  /**
   * @var {Arm}
   */
  arm: Arm;

  /**
   * @var {Head}
   */
  head: Head;

  /**
   * Build the person.
   *
   * @param {Head} head
   * @param {Arm} arm
   */
  constructor (head: Head, arm: Arm) {
    this.head = head
    this.arm = arm
  }

  /**
   * Greet someone.
   *
   * @return {string}
   */
  greet (): string {
    return [this.head.nod(), this.arm.wave()].join(', ')
  }
}
