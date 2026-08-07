

//Primitive data

//string, number, boolean, undefined, null

let name = "hasan";
let age = 29;
let isMarried= true;
let result = undefined;
let salary = null;
let number = NaN;

let name2 = name;

name2 = "Dhaka";
console.log(name);
console.log(name2);

// console.log(
//     typeof name,
//     typeof age,
//     typeof isMarried,
//     typeof result,
//     typeof salary,
//     typeof number

// );

//non primitive data

let student = {
    name: "Hasan",
    age : 29
}

let arr = [10,20];

function aff(){
    return 100;
}

// console.log(
//     typeof student,
//     typeof arr,
//     typeof aff
// );

let student2 = student;

student2.name = "Rajshai ";

console.log(`student 2 ar name =  ${student2.name}`);

console.log(`student  ar name =  ${student.name} || ayhay main tao chnage hye gelo :( aydai non primitive` );