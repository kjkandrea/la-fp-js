import { compose } from 'ramda'

const trim = str => str.trim()

const normalize = str => str.replace(/\-/g, '')

const validLength = (param, str) => str.length === param

const checkLengthSsn = str => validLength(11, str)

console.log(checkLengthSsn('01234567891'))