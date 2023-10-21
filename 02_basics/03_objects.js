//singleton
//object.create  --constructer method

//Objest Literals 

//Symbol Declare 
// const sym = Symbol("key01");

//literal method
const user = {
    name: "Nish",
    "last name": "Yadav",
    email: "yadav@google.com",
    isloggeIn: false,
    [sym]: "key02"
}

// console.log(user.name);
// console.log(user[sym]);
// console.log(user);
// console.log(typeof user[sym]);
// console.log(user["last name"]);

user.name = "Nishant";
// Object.freeze(user);
// user.name = "NishantSIngh";
// console.log(user);

user.greeting = function (){
    console.log("Hello!!!");
}

console.log(user.greeting);
console.log(user.greeting());

user.greeting2 = function (){
    console.log(`Hello ${this.name}, your email id is 
     ${this.email}`);
}
console.log(user.greeting2());