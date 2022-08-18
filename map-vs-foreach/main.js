var arr = [1,2,3,4,5,6,7]

const arrMapResult = arr.map(element => {
    return element + 2
})

const forResult = arr.forEach((element, i) => {
    arr[i] = element + 3
})
console.log(arr, arrMapResult, forResult)