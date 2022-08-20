
function withVar() {
    for (var index = 0; index < 3; index++) {
       setTimeout(function log() {
           console.log(index)
       }, index * 1000); 
        
    }
}

withVar() // with var keyword the output is three times 3

function withLet() {
    for (let index = 0; index < 3; index++) {
       setTimeout(function log() {
           console.log(index)
       }, index * 1000); 
        
    }
}

withLet() // with let keyword the output is: 0, 1, 2

var length = 4

function callback() {
    console.log("\n CALLBACK: "+this.length)
}

const object = {
    length: 5,
    method()
    {
        console.log(arguments)
        arguments[0]()
    }
}

object.method(callback, 2, 3)
