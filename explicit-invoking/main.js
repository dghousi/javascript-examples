var calc = {

    total: 0,
    add(a) {
        this.total += a;
        return this
    },
    subtract(a) {
        this.total -= a
        return this
    },
}

const result = calc.add(100)

console.log(result)