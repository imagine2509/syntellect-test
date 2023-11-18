function getHandshakesCount(people) {
  let handshakesCount = 0
  for (let i = 0; i <= people; i += 1) {
    if (i > 1) {
      handshakesCount = handshakesCount + (i - 1)
    }
  }
  return handshakesCount
}

console.log(getHandshakesCount(10))

// 2ч = 1
// 3ч = 3
// 4ч = 6
// 5ч = 10
// 6ч = 15
// 7ч = 21
// 8ч = 28
// 9ч = 36
// 10ч = 45
