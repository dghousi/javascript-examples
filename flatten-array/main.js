let arr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];



// T1: Using concat() and apply()

let flatArray = [].concat.apply([], arr);

console.log(flatArray)

// T2: Using the spread operator

let flatArrayT2 = [].concat(...arr);

console.log(flatArrayT2)

// T3: Using the reduce method


let flatArrayT3 = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

console.log(flatArrayT3)