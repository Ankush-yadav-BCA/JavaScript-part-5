/*-------------------For Question no. 1 ----------*/
function rollDice(){
    let dice = Math.floor(Math.random()*6)+1;
    return dice
}

/*------------------For Question no. 2 ----------*/
let car = {
    name : "Scorpio",
    model : "S11",
    colour : ["Black","White"]
}
console.log(car.name);
console.log(car.model);
console.log(car.colour);

/*------------------For Question no. 3 ----------*/
let person = {
    name : "Ankush Yadav",
    age : 18,
    city : "Varanasi"
}
console.log(person);
console.log("After changes..");
person.city = "Surat";
person.country = "India";
console.log(person);
