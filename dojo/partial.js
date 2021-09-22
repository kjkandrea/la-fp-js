import { partial } from 'ramda';

const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

function main() {
  // 1.
  console.log(
    greet('Hello', 'FP.', 'Kim', 'Jk')
  )

  // 2.
  const sayHola = partial(greet, ['Hola'])
  console.log(
    sayHola('FP.', 'Kim', 'Jk')
  )

  // 3.
  const sayHolaFp = partial(greet, ['Hola', 'Fp.'])
  console.log(
    sayHolaFp('Kim', 'JK')
  )

  // 결론. partial 은 다항 함수의 '부분 할당' 을 지원한다. 부분 할당이 된 함수를 리턴한다.

}main()