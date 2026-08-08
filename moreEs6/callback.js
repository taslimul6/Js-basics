


function student(cb){
    // console.log("ongoing registration process");

    return  cb();
}

function basic(){
    let std ={
        name: "fotka",
        rol:99
    }
    return std ;
}

function academic(){
    let academia ={
        "hsc" :4,
        "ssc" :5
    }
    return academia;
}


// console.log(student(basic));

// console.log(student(academic));


// complex callback


function calculator(a,b, cb){
    let sum = a+b;
    return cb(sum);
}

function displayResult(result){
    return result;
}

console.log(calculator( 10,20, displayResult))
















