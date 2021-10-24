import R from 'ramda'

/*tap*/
const tapTest = R.pipe(
  R.map(v => v * v),
  R.filter(v => v % 2),
  R.tap(console.log),
  R.take(2)
)

/*alt*/
const rand = handleRandom => R.pipe(Math.random, handleRandom, Math.floor)()
const alt = R.curry((func1, func2, val) => func1(val) || func2(val))
const isOdd = v => Boolean(v % 2)
const warnEven = () => console.log('is even!!')

const altTest = R.pipe(
  R.tap(console.log),
  alt(isOdd, warnEven),
)
const randUnderTen = rand(v => (v * 10) + 1)

altTest(randUnderTen)