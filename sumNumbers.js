function sumArray(array) {
  let result = 0 // 1
  for (let index = 0; index < array.length; index++) {
    // loop initialization 1
    result += array[index] // 3
  }
  return result //1
}

// 1) 1+1+1+n => 3+n => 3 + (1*n) => (n*1) + 3
// 2) 1*n
// 3) n => T(n) => O(n)
console.log(sumArray([1, 3, 10]))
