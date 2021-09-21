import Person from '../../model/person.js'

import R from 'ramda'

const person = new Person(false, 'KIM', 'JK', '1992-01-07')
const lastnameLens = R.lensProp('lastname')
const newPerson = R.set(lastnameLens, 'SJ', person)
console.log(
  R.view(lastnameLens, person),
  R.view(lastnameLens, newPerson),

  person.lastname,
  newPerson.lastname
)