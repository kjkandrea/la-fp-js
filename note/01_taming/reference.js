const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const sort = arr => arr.sort((a, b) => a - b)

console.log(sort(arr)) // [1,2,3 ...]
console.log(arr) // [1,2,3 ...] : 부수효과 발생. 원본데이터가 변경됨. 불변 하지않다.