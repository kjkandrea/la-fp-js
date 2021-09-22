import R from 'ramda'

const students = ['MM', 'SJ', 'JK', 'YS']
const grades = [10, 100, 90, 80]

const smartestStudent = R.compose(
  R.head,
  R.pluck(0),
  R.reverse,
  R.sortBy(R.prop(1)), // 튜플 오른쪽 인수(grade) 기준으로 정렬.
  R.zip
)

const smartestStudent2 = R.pipe( // 파이프는 compose 와 방향이 다를 뿐이구나!!
  R.zip,
  R.sortBy(R.prop(1)),
  R.reverse,
  R.pluck(0),
  R.head
)

function main() {
  console.log(
    smartestStudent(students, grades), // SJ
    smartestStudent2(students, grades)
  )
}main()