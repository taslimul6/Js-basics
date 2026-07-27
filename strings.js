

let name = "Taslimul Hasan    ";

let upName = name.toUpperCase();

let loName = upName.toLowerCase().trim();


console.log( loName.includes("hasan") );

console.log( loName.slice(0,5) );

console.log( loName.slice(-2) );
console.log( loName.replace("hasan", "shoumik"));


//sting to array

let fruits = "apple, komola, bedena, kola";

let arr = fruits.split(",");
console.log(arr);

let joined= arr.join("  ");

console.log(joined);

//// concat////


let firstname = "Taslimul";
let lastname = "hasan";

console.log( firstname.concat(" ", lastname , "||||| ").repeat(2));


