//== => Loose equality
//=== strict equality

console.log(null == undefined);
console.log(null === undefined);
console.log(0 == false);
console.log(0 === false);


//scope 

//global, block, function
//let ,const are global scope. 
let name= "hasan";
//{ block scope}
if(true){
    let roll ="web dev"
    console.log(roll);
    var address = "London";
}
//console.log(roll);// error
console.log(address); // var only function scope

// var is function scope function(){var }

function add(a,b){
    let sum = a+b;
    return sum;
   
}

console.log(add(1,5));


// console.log(student); // error hoisting
let student = "Halua";

console.log(student);

console.log(student2); //undefined hoisting up

var student2 = "malue";

console.log(student2);

// func hoiting

console.log(adding()); // hoisting top, it can access before  

function adding(){
    return 100;
}

console.log(sabah());

const sabah = ()=> 120;

console.log(sabah());