

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