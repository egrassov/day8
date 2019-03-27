function pepe(s1, s2, func) {
    function add(first, second, resultFn) {
        console.log("Add function started");
        resultFn(first + second);
    }
    
    function logDone(num) {
        console.log("I'm done! The result is: " + num);
    }
    
    function square(num) {
        console.log("The square is: " + num * num);
    }
    
    //add(s1, s2, logDone);

    return {
        f1: logDone
    }
    
}

var myObject = pepe(10,20)

myObject.f1(100000)