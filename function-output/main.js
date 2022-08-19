
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


