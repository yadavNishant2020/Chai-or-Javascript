const tinderUser = new Object(); // Singleton Object 
const tinderUser1 = {} // Non-Singleton Object 

tinderUser1.id="123xx";
tinderUser1.name="Nish";
tinderUser1.isLoggedIn=false;

console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

// console.log(tinderUser1);

// const regularUser = {
//     emial:"hsdjb@gmail.com",
//     fullname:{
//         userfullname:{
//             fName:"NIshant",
//             lName:"Yadav"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.fName);

//object combining
// const obj1 = {1:"a", 2:"b"};
// const obj2 = {3:"a", 4:"b"};
// const obj3 = {5:"a", 6:"b"};

// const obj4 = Object.assign({}, obj1, obj2);
// const obj5 = {...obj1,...obj2};
// console.log(obj4);
// console.log(obj5);

//accessing objects in the array
const data = [
    {
        user: "Nish",
        pass: "1231"
    },
    {
        user: "Nidfgsh",
        pass: "1242331"
    },
    {
        user: "Nishdfs",
        pass: "123sdfs1"
    }
]

console.log(data[2].user);

