const myArr = [23,43,54,"Nish",];
// console.log(myArr);

const myArr2 = new Array(12 , "asda", 121);
// console.log(myArr2);

//methods
// myArr.push(23,29);
// myArr.pop();
// myArr.unshift(1);
// myArr.shift()
// console.log(myArr.includes(43));
// console.log(myArr.indexOf(43));

//slice & splice
console.log("A", myArr);
const nwArr = myArr.slice(0,3);
console.log(nwArr);
console.log("A", myArr);

const nwArr2 = myArr.splice(0,3);
console.log("B", myArr);
console.log(nwArr);
