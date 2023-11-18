function getStringWithoutDubles(string) {
  const stringArr = string.split(',')
  return [...new Set(stringArr)].join(',')
}

console.log(getStringWithoutDubles('кошка,собака,лошадь,корова,кошка'))
