import Person from '../../model/Person.js'
import Address from '../../model/Address.js'

import R from 'ramda'

const person = new Person(false, 'KIM', 'JK', '1992-01-07')
const lastnameLens = R.lensProp('lastname')
const newPerson = R.set(lastnameLens, 'SJ', person)

console.log(
  R.view(lastnameLens, person),
  R.view(lastnameLens, newPerson),

  person.lastname,
  newPerson.lastname,
)

person.address = new Address('KR', 'Seoul', 'Gwanak', '123-45', 'Mummu Gil')
console.log(person.address)