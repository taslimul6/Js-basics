

 let numbers = [10,20,50,60,120];

// console.log(typeof alpha);

let max= Math.max(...numbers);

// console.log(max);
 

let min = Math.min(...numbers, 500,2500,2);

// console.log(min);


let student = {
    name : "Hasan",
    age : 29,
    class : "inter"
};



let student2 = {...student, "single": false}

student.haveBook = false;

// console.log(student2);


///rest operator

function sum( a, b, ...rest){

    console.log(rest);

    let s = 0;
    for(let num of rest){
        s+=num;
    };
    
    return a+b+s;
}


console.log(sum(2,3,4,5,6,7,8,9,44));