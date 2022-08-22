var a = 1;
var f1 = function() {
    console.log(a)
}

var f2 = function () {
    var a = 2
    f1()
}

f2();

var b = 1;
var f3 = function() {
    console.log(b)
}

var f4 = function () {
    b = 2
    f3()
}

f4();