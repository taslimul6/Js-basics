


let number= 10;

for(let i = 1; i <= number ; i++){

    if(i%2==0){
        console.log(i);
    }
    
}

let sum = 0;
for(let i = 1; i <= number ; i++){
     
    sum = sum + i;
    console.log("sum of " , sum);
}console.log(sum);


///mini
number =100;

for(let i = 1; i <=number ; i++){

    if(i>40){
        break;
    }
    if(i%5==0){
        continue;
    }


    console.log(i);
}