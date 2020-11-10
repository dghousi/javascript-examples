/** sum of numbers up to givin number in param  */

function sumUp(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
    result += i
  }
  return result
}

console.log(sumUp(100))

/** start and end variables for performance issue  */
let start = 0
let end = 0

/** performence.now() is js object for checking performance of OS */

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
