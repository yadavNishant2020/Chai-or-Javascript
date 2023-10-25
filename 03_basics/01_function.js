// function isLoggedIn(userName){
//     if(userName === undefined){
//         return "Plz enter the username."
//     }
//     return `${userName} is logged in.`
// }

// function isLoggedIn1(userName){
//     if(!userName){
//         return "Plz enter the username."
//     }
//     return `${userName} is logged in.`
// }
// console.log(isLoggedIn());
// console.log(isLoggedIn1());

// function CartPrice(value1, value2, ...item1){   // here "..." is working as a rest operator
//     return value1,value2,item1
// }

// console.log(CartPrice(200,12,232,232,123112,123123));

//Passing Object as parameter
const user = {
name: "Nish",
email:"xxx@xxx.com"
}

function ObjectHandling(anyObject){
 return `${anyObject.name} is a user and ${anyObject.email} is his email id.`
}
console.log(ObjectHandling(user));

//Passing Array as parameter

const priceArray = [121,5454,47,232];
function priceChecker (anyArray){
    return anyArray[2];
}
console.log(priceChecker(priceArray));