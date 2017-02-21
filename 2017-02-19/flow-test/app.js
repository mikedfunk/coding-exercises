// @flow
import {container} from 'dependency-injection-es6'
import Person from './Person'
// import Arm from './Arm'
// import Head from './Head'

// container.bind(Arm, Arm)
// container.bind(Head, Head)
// const arm = new Arm()
// const head = new Head()
// let person = new Person(head, arm)
let person: Person = container.getInstanceOf(Person)
console.log(person.greet())
