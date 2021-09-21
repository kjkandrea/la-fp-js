for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`i : ${i}`) // i: 3, i: 3, i: 3 ... wtf
  }, 100)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`i : ${i}`) // i: 0, i: 1, i: 2
  }, 100)
}