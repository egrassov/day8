//closure - you can consider this a function factory, it creates
//functions, returns them, and they are pre-programmed to work
//as you want
function generateShape(type, func){
    //here happens part of the magic!
    //do as many computations, API calls and database calls as you wish
    var theType = "i am generating the following shape type: " + type
    var randNumber = func()
    
    //function as an expression
    var shapeGenerator 

    if (randNumber > .5) {
        //here depending on the 50% of possibilities, we decide the f's implementation
        shapeGenerator = function () {
            console.log("Implementation type I")
            console.log(theType)
            console.log(randNumber)
        }
    }   else {
        shapeGenerator = function () {
            console.log("Implementation type II")
            console.log(randNumber)
            console.log(theType)
        }
    }
    return shapeGenerator
}

if (param1 > condicion && param2 < condicion) {
    var myEllipsePainter = generateShape("ellipse", Math.random)
    myEllipsePainter()
}
