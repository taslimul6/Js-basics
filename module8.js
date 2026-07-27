

let price1 = 10;
let price2 = 10;

let comp = price1 !== price2;

console.log(comp);

let isRaining = true;

if (isRaining) {

    console.log("take your umbrella");
}
else {
    console.log("enjoy the sunlight");
}

//shorthand

let take = isRaining ? "take umbrella" : "enjoy sunlight";

console.log(take);

//double consition

let Age = 21;
let hasTicket = false;

let entry = Age > 18 || hasTicket ? "you are in" : "get lost";

let double = Age > 18 && hasTicket ? "you are in" : "get lost";

console.log(entry);
console.log(double);

//greading system


let mark = 80;

let grade = mark >= 80 ? "A+ , send sweets" : mark >= 70 ? "A , not bad" : mark >= 60 ? "pass, good" : "Fail get lost";

console.log(grade);
