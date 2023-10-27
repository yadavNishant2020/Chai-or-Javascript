//This introduction and its behavior in Node env and in the Browser env
const user = {
  username: "Nish",
  price: 999,
  welcomeMsg: function () {
    console.log(`${this.username}, welcome to the website.`);
    console.log(this);
  },
};

// user.welcomeMsg();
// user.username = "sam"
// user.welcomeMsg();

// console.log(this);

//----- can't use this in the function ----
// function chai(){
//     let username = "Nish";
//     console.log(this.username);
// }
// chai();

// const chai = () =>{
//     let username = "Nish";
//     console.log(this.username);
// }
// chai();

//----- arrow funtion -----

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//if we dont use {} in the arrow function then we don't need to use return

// const addTwo = (num1, num2) => num1 +num2;

// const addTwo = (num1, num2) => (num1 +num2);
const addTwo = (num1, num2) => ({username:"Nish"})
console.log(addTwo(5,8));

