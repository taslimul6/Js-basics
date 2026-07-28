///push/// 

let fruits = ["apple", "orange", "guava", "lichi", "mango"];

fruits.push("banana", "kola");

console.log("after pushing : " , fruits);

///pop

fruits.pop();

console.log("after poping" , fruits);

///unshift

fruits.unshift("misty");

console.log("after unshift" , fruits);

//shift

fruits.shift();

console.log("after shift" , fruits);

//length

console.log(fruits.length);

//includes

console.log(fruits.includes("mango"), fruits.indexOf("mango"));


// slice and splice

console.log(fruits.slice(1,3));

console.log(fruits);
//(start index, delete count)
fruits.splice(2,1);

console.log(fruits);


//filter
let numbers = [1,2,3,4,5,6,7,];

let newcall = numbers.filter(num=>num > 2 ).reverse();

console.log(newcall);