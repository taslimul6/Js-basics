
//Object keys , values, entry

const user = {
    name:"Hasan",
    age:29,
    id:12
}

const keys = Object.keys(user);
const values = Object.values(user);
const entry = Object.entries(user);


console.log(keys.length); //length
console.log(values);
console.log(entry);


for(let key of keys){
    console.log(user[key]);
}


// entry loop
for(let key2 of entry){
    console.log(key2);
}


//delete

delete user.age;

console.log(user);

//seal


const  bankAcc={
    number :11254,
    amount: 500
}


Object.seal(bankAcc);

bankAcc.due = 5000; //not working sealed // no new perameter will be allowed
bankAcc.amount =10; //working...values can be change.

console.log(bankAcc?.due?.amount); //optional Chaining
console.log(bankAcc?.amount); //optional Chaining

//Freeze

Object.freeze(bankAcc);

bankAcc.amount=599; //not working account Freezed

console.log(bankAcc);