const name = "Nishant";
const score = "10";

// console.log(`Hello my name is ${name} and my score is ${score}`);

const nikName = new String ("NishYadav");

// console.log(nikName[1]);
// console.log(nikName.length);
// console.log(nikName.charAt(3));
// console.log(nikName.indexOf("h"));

const newString = nikName.substring(0,5);
console.log(newString);

const newString2 = nikName.slice(-8,4);
console.log(newString2);

const newString3 = "   NSY       ";
console.log(newString3);
console.log(newString3.trim());

const url = "https:/nish.com/%30nish";
console.log(url.replace("%30", "-"));

console.log(url.split('/'));

