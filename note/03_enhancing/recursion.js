import _ from 'lodash';

function sum (arr) {
  return _.isEmpty(arr)
    ? 0
    : arr[0] + sum(arr.splice(1, arr.length))
}

console.log(
  sum([1, 2, 3, 4, 5, 6, 7, 8, 9]),
)