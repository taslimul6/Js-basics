


//slice

cake = [1,2,3,4,5,];

let newCake = cake.slice(2,5);

console.log(newCake);

//reduce

let redCake = cake.reduce((accumulator, elem, inx , arr)=>{


    return accumulator + elem;

    
}, 0);

console.log(redCake);