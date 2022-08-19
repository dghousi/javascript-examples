

let calculator = {
    read() 
    {
        this.a = +prompt('add value a', 0)
        this.b = +prompt('add value b', 0)
    },
    sum()
    {
        return this.a + this.b
    },
    subtract()
    {
        return this.a - this.b
    },
    multiply()
    {
        return this.a * this.b
    },
    devide()
    {
        return this.a / this.b
    },
}


calculator.read()

console.log(calculator.sum())
console.log(calculator.subtract())
console.log(calculator.multiply())
console.log(calculator.devide())