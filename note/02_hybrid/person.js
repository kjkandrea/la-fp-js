class Person {
  firstName = 'KIM'
  lastName = 'Jk'

  get fullName () { // 이것보단..
    return [this.firstName, this.lastName].join(' ')
  }

  static fullName = person => [person.firstName, person.lastName].join(' ') // 이건 좀 억지스러운 느낌? ㅋㅋ
}

const person = new Person()
console.log(person.fullName)

const fullName = person => [person.firstName, person.lastName].join(' ') // 이게 결합도가 낮다.
console.log(fullName(person))
console.log(Person.fullName(person))