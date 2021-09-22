import R from 'ramda'

const students = ['MM', 'SJ', 'JK', 'YS']
const grades = [10, 100, 90, 80]

const smartestStudent = R.compose(
  R.sortBy(R.prop(1)),
  R.zip
)

function main() {
  console.log(
    smartestStudent(students, grades)
  )
}main()