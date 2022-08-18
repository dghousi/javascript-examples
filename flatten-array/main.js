let arr = [
    [1, 2],
    [3, 4],
    [5, 6][7, 8, 9],
    [10, [10,99,99], 11, 12, 13, 14, 15, [22,3,5,6,7]]
];



// T1: Using concat() and apply()

let flatArray = [].concat.apply([], arr);

console.log("The Result T1: \n"+flatArray)

// T2: Using the spread operator

let flatArrayT2 = [].concat(...arr);

console.log("The Result T2: \n"+flatArrayT2)

// T3: Using the reduce method


let flatArrayT3 = arr.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

console.log("The Result T3: \n"+flatArrayT3)

// T4: using flat() method

let flatT4 = arr.flat(6)
console.log("The Result T4: \n"+flatT4)