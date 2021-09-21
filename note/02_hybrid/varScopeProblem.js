for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`i : ${i}`) // i: 3, i: 3, i: 3 ... wtf
  }, 100)
}

try {
  console.log(i)
} catch (err) {
  console.error('i is undefined')
} // 3 🙃

for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(`j : ${j}`) // j: 0, j: 1, j: 2
  }, 100)
}

try {
  console.log(j)
} catch (err) {
  console.error('j is undefined')
} // err