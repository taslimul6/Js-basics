//checkTemperature 



function checkTemp(x){
    if(x >= 35){
        console.log("hot");
    }else if(x >=20){
        console.log("normal");
    }else{
         console.log("cold");
    }
}

checkTemp(15);



// Input: a number
// Output: the number with digits reversed
// Returns: a number


 
function reverseNumber(num) {
  let str = num.toString();
  // TODO: build the reversed string, then convert back to a number
    let str2  = str.split("").reverse().join("");

  return str2;
 
}
 
console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7
