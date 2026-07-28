/*

1. Combine two arrays into one new array. Log the result.
2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
3. Turn an array of words into a single sentence string.
Expected: a string like "word word word"
4. Check two variables (one array, one not) and log whether each is an array.
Expected: true then false, or false then true depending on order
5. Reverse an array of at least 5 items. Log the result.
6. Sort an array of names alphabetically. Log the result.
7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).


*/

let arr1 =[1,2,3,4,5,6,7,8];

let arr2 =[9,10,11,12];

let arr = arr1.concat(arr2);

console.log(arr);

//////////2

let portion = arr1.slice(2,4);

console.log(portion);

////////////3

let str = arr1.toString( ",")

console.log(str);

 str = arr1.join("")

console.log(str);
/////////4
console.log(Array.isArray(str), Array.isArray(arr1));

//////////5

console.log(arr.reverse());
////////6 

let arr3 = ["bangladesh" ,"amr" ,"desh" ,"jodio", "ami" ,"thakina"]
let arr4 = [4,6,2,1,7,8,4]

console.log(arr3.sort(), arr4.sort());