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
const altTest = R.pipe(
  console.log
)
const randUnderTen = rand(v => (v * 10) + 1)
altTest(randUnderTen)