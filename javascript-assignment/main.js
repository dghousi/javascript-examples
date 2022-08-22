

let modal = document.querySelector("#results")

setTimeout(function () {
    console.log("BOOM After 10000")
}, 10000);

console.log('Results shown')

// the result `Results shown: immediately`

class Person {
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
}

var person = new Person('Dawlatzai', '27')

console.log(person)

function addTax(total)
{
    return total * 1.05
}

addTax(50)

// the result is : addTax(50)

// What will be the console for `a.length` ?

var arr = ['dog', 'cat', 'hen']

arr[100] = 'fox'

console.log(arr.length)

// the reult is:101