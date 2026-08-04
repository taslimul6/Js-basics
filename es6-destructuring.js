

let numbers = [10,20,30,40,60,80];

let [one, two,,,,three] = numbers;

console.log(one, two, three);


const student = {
    name: "Hasan",
    roll: "Web",
    age :"28"
}

//modify key

const {name:fullname, age} = student;

console.log(fullname);

/////another nesterd object

const student1 = {
    name: "Hasan",
    roll: "Web",
    age :"28",
    mark:{
        math:10,
        eng:50,
        ict:20

    }
}

//nested destucture

const {name, mark:{eng, ict:ICT}} = student1;

// console.log(mark);  //mark desructured.

console.log(ICT);