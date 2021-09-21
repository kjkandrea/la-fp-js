import Person from '../../model/Person.js'
import Address from '../../model/Address.js'

import R from 'ramda'

const person = new Person(false, 'KIM', 'JK', '1992-01-07')
const lastnameLens = R.lensProp('lastname')
const sjPerson = R.set(lastnameLens, 'SJ', person)

console.log(
  R.view(lastnameLens, person),
  R.view(lastnameLens, sjPerson),

  person.lastname,
  sjPerson.lastname,
)

person.address = new Address('KR', 'Seoul', 'Gwanak', '123-45', 'Mummu Gil')
const zipPath = ['address', 'zip']
const zipLens = R.lens(R.path(zipPath), R.assocPath(zipPath))

console.log(
  R.view(zipLens, person),
)

const newPerson = R.set(zipLens, '543-21', person);
const newZip = R.view(zipLens, newPerson)
const originalZip = R.view(zipLens, person)

console.log(
  newZip,
  originalZip
)