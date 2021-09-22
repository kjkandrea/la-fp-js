import { compose } from 'ramda'

const addTwo = num => num + 2
const pow = num => num * num

function main() {
  // 1
  const three = addTwo(1)
  const powThree = pow(three)
  const result = pow(powThree)

  console.log(
    result
  )

  // 2
  console.log(
    pow(pow(addTwo(1)))
  )

  // 3
  const func = compose(pow, pow, addTwo) // compose 는 <= (오른쪽 부터 왼쪽) 순으로 평가된다.

  console.log(
    func(1)
  )

}main()
