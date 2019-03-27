"use strict";

var a = 1;
var b = 2;

function inner() {
    a = 4;    // not using `var`
    b = 5

    var b = 10
}

inner();
console.log(a);
console.log(b);