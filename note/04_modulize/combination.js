import R from 'ramda'

const tapTest = R.pipe(
  R.map(v => v * v),
  R.filter(v => v % 2),
  R.tap(console.log),
  R.take(2)
)

console.log(
tapTest([1,2,3,4,5])
)