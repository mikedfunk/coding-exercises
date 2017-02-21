import {Arm, Head, Person} from './Person'

const person = new Person(new Arm(), new Head())
console.log(person.greet())

