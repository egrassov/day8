// console.log(declaredLater);  // undefined

// var declaredLater = 2;
// console.log(declaredLater); // 2


// var declaredLater;
// console.log(declaredLater);

// declaredLater = 2;
// console.log(declaredLater);


///////////end of variable hoisting studies

///function hoisting


// a()

// function a() {
//     console.log("hola")
// }

var name = "Fer";

function changeName() {
    console.log("Original name was " + name);
  
    var name = "Harry";
    console.log("New name is " + name);
  }
  

changeName();