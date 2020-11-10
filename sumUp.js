/** sum of numbers up to givin number in param  */

function sumUp(n) {
  let result = 0
  for (let i = 0; i <= n; i++) {
    result += i
  }
  return result
}

console.log(sumUp(100))
