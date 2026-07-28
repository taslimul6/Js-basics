//begainter task


/*

1. Create an array with 3 items of your choice. Log it.
Expected: array with your 3 items printed
2. Log the length of the array from Task 1.
Expected: 3
3. Log the item at index 0 and index 2 of the array.
4. Change the item at index 1 to a new value. Log the array.
5. Add one item to the end of the array. Log the array.
6. Remove the last item from the array. Log the array and the removed value.
7. Add one item to the start of the array. Log the array.
8. Remove the first item from the array. Log the array and the removed value.
9. Check whether the array contains a specific value. Log true or false.
10. Find the position of a specific value in the array. Log the number.
11. Loop through the array with a for loop and log each item.
12. Loop through the array with a while loop and log each item.

*/

let fruits = ["apple" , "banana", "mango"];

console.log(fruits.length);

console.log(fruits[0], fruits[2]);

fruits[1]= "komola";

console.log(fruits);

fruits.push("dim");

console.log(fruits);

let poped = fruits.pop();

console.log( fruits, "poped value =>" , poped);

fruits.unshift("jodu");

console.log(fruits);

let shifted = fruits.shift();

console.log(fruits, "shited value =>" , shifted);

console.log(fruits.includes("mango"));

console.log(fruits.indexOf("mango"));

for(let fruit of fruits){
    console.log(fruit);
}

let x =0;

while(x< fruits.length){
    console.log(fruits[x]);
    x++;
}