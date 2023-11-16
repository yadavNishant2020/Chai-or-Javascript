// const promiseOne = new Promise((resolve, reject) => {
//   //Do an asyn task
//   //DB calls, cryptography, network
//   setTimeout(() => {
//     console.log("Async task is completed");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("Task 2 consumed");
// });

// const promise_3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Nishant", email: "xyz@xyz.com" });
//   }, 3000);
// });

// promise_3.then(function (user) {
//   console.log(user);
// });

// const promise_4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Nish", email: "xxx@xxx.com" });
//     } else {
//       reject("ERROR triggered!!!!");
//     }
//   }, 4000);
// });

// promise_4
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Promise finally completed either resolved or rejected. ");
//   });

// const promise_5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "JS", email: "JS@xxx.com" });
//     } else {
//       reject("ERROR in JS triggered!!!!");
//     }
//   }, 4000);
// });

// async function promise_5_consume() {
//   try {
//     const res_prom_5 = await promise_5;
//     console.log(res_prom_5);
//   } catch (error) {
//     console.log(error);
//   }
// }

// promise_5_consume();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

fetch("https://randomuser.me/api/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
// getAllUsers();
