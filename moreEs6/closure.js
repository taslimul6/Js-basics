// Closure is when a function is able to remember and access its lexical scope, even when that function is executing outside its lexical scope




function counter(){
    let count = 0;

    return function(a,b){
        return count = count + a + b;
    }

}

let ourcounter = counter();
let othercounter = counter();

// console.log(ourcounter(2,5));
// console.log(othercounter(500,5));
// console.log(ourcounter(5,5));
// console.log(othercounter(1500,5));


///// new business logic


function cashCounter(){
    let cash = 0;
    return function(payable){
        return cash += payable;

    }
}


let coffieBusiness = cashCounter();

console.log(coffieBusiness(200));
console.log(coffieBusiness(400));

let teaBusiness = cashCounter();

console.log(teaBusiness(10));
console.log(coffieBusiness(400));
console.log(teaBusiness(20));