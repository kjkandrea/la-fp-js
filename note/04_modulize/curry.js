import R from 'ramda';

const checkType = R.curry((typeDef, obj) => {
  if (!R.is(typeDef, obj)) {
    let type = typeof obj;
    throw new TypeError(`type mismatch. ${typeDef} 이어야 하는데, ${type} 입니다.`)
  }
  return obj
})

console.log(
  checkType(String)('Curry'), // Curry
  checkType(Number)(3), // 3
  checkType(Date)(new Date()), // Date
  checkType(Object)({}), // {}
  checkType(Array)([]), // []
  checkType(String)(1), // Type error
)