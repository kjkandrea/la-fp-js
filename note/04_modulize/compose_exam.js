import { compose, partial } from 'ramda'

const trim = str => str.trim()
const normalize = str => str.replace(/\-/g, '')
const validLength = (param, str) => str.length === param

const checkLengthSsn = partial(validLength, [11])

const cleanInput = compose(normalize, trim)
const isValidSsn = compose(checkLengthSsn, cleanInput)

const data = '010-1234-5678'

console.log(
  cleanInput(data), // 01012345678
  isValidSsn(data) // true
)