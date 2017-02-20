import Person from './Person'
import Arm from './Arm'
import Head from './Head'

const arm = new Arm()
const head = new Head()
let person = new Person(head, arm)
console.log(person.greet())
