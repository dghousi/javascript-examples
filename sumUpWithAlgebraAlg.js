function sumUp(n) {
  return (n / 2) * (n + 1)
}

console.log(sumUp(100))

// it tackes constant time measurment
start = performance.now()
sumUp(10)
end = performance.now()

start = performance.now()
sumUp(15)
end = performance.now()

start = performance.now()
sumUp(100000)
end = performance.now()

let resultOfPerformance = start - end

console.log(resultOfPerformance)
