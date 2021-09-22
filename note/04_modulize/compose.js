const str = '카레닌은 잠에서 깰 때 순수한 행복을 느꼈다. 그는 천진난만하게도 자신이 아직도 이 세상에 있다는 사실에 놀라고 진심으로 이를 즐거워했다. 반면에 테레자는 밤을 연장하고 싶고 다시 눈을 뜨고 싶지 않은 욕망 때문에 마지못해 잠에서 깨어났다.'

const explode = str => str.split(/\s+/)
const count = arr => arr.length

const confuseCountWords = str => count(explode(str)) // 이걸 쉽게 표현하려면?

console.log(
  confuseCountWords(str) // 34.
)

import { compose } from 'ramda' // 컴포즈로 합성하자.

const countWords = compose(count, explode) // 더 깔끔해졌어!

console.log(
  countWords(str) // 34.
)
