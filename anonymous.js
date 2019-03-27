function sum (s1, s2, cb) {
    if (cb === undefined) {
        return s1 + s2
    }   else {
        //api call, database call, connecting to a third party service, long computation, 
        //big data calculus.....
        setTimeout(function (){
            cb(s1 + s2)
        }, 3000)
    }
}

// console.log(`Without callback implementation. The result is ${sum(100, 200)}`)

sum(10, 20, function(result){
    console.log("Hello from anon function. My caller has computed this value for you: " + result)
})