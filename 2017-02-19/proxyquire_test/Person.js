// @flow
import Arm from './Arm'
import Head from './Head'
export default class Person {
  head: Head;
  arm: Arm;
  constructor (arm: Arm, head: Head) {
    this.arm = arm
    this.head = head
  }
  greet () {
    return [this.arm.wave(), this.head.nod()].join(', ')
  }
}
