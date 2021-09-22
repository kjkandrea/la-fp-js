import _ from 'lodash'

function sum (arr) {
  return arr.length > 1
    ? 0
    : arr[0] + sum(arr.splice(1, arr.length))
}

function forSum (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++ ) {
    result += arr[i]
  }
  return result;
}

(() => {
  console.group('recursion')
  console.time()
  console.log(
    sum([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  )
  console.timeEnd()
  console.groupEnd()
})();

(() => {
  console.group('reduce')
  console.time()
  console.log(
    [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((a, b) => a + b)
  )
  console.timeEnd()
  console.groupEnd()
})();

(() => {
  console.group('for')
  console.time()
  console.log(
    forSum([1, 2, 3, 4, 5, 6, 7, 8, 9])
  )
  console.timeEnd()
  console.groupEnd()
})();

console.log('result : reduce = for > recursion')