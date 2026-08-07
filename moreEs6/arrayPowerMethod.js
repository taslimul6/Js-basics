

//map

let student = [10,20,30,40,50,];

let st = student.map((a,b,c) => {

    let book = a*2;
    return {book, b ,c} ;
                

});

// console.log(st);
let emm= 0;

let std = student.forEach((stt, a,b)=>{

    emm = emm+ stt
   
    
    return emm;


})

// console.log(emm);

///filter

let goodStd = student.filter((a, b, c)=> a>20

// {
//     if(a>20){
//         return true;
//     }
// }
);

console.log(goodStd);


///find single item

let goodStd1 = student.find((a)=> a>20);

console.log(goodStd1);