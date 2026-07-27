

for(let i =0; i<=4;i++ ){
    console.log("hello");
}



let i= 0;

while (i<=5) {
    console.log("colse , colbe");
    i++
}

i=1;
do {
    console.log("do , colbe");
    i++
} while (i<5){
    console.log("while , colbe");
   
};



// loops in arrey

const fruits= ["apple", "mango", "banana", "dragon fruit"];

for(const fruit of fruits){
    console.log(fruit);
}
    
const numbers = [1,5,10,25,50];

for(const number of numbers){
  console.log(number);
}

//  loops in obsject

let student={
    "name" : "hasan",
    "roll":"125"
}

console.log(typeof student);

for(const key in student){
    console.log(key ,": ", student[key]);

}