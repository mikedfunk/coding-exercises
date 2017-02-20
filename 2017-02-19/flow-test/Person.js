// @flow
import Arm from './Arm'
import Head from './Head'
export default class Person {
  arm: Arm;
  head: Head;
  constructor (head: Head, arm: Arm) {
    this.head = head
    this.arm = arm
  }
  greet (): string {
    return [this.head.nod(), this.arm.wave()].join(', ')
  }
}
