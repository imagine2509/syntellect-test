function turtleClimbing(metersToReach, days = 0) {
  if (metersToReach >= 50) return turtleClimbing(metersToReach - 20, days + 1)
  else {
    return days + 1
  }
}

console.log(turtleClimbing(100))

// ответ, высчитанный вручную:
// 0 + (50-30) (20) + (50-30) (40) + (50-30) (60) + 40 (на вершине)
