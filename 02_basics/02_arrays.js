const marvel_heros = ["thor", "IronMan", "Spidermen"];
const dc_heros = ["flash", "Batman", "Supermen"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros.concat(dc_heros));

//spread method
// const all_heros = [...dc_heros, ...marvel_heros]; 
// console.log(all_heros);

const another_array = [1, 2, 4,5, [4,5,6],8,8,[4,[34]]];
const real_another = another_array.flat(Infinity);
console.log(real_another);

console.log(Array.isArray("Nish"));
console.log(Array.from("Nish"));
console.log(Array.from("Nish"));

let s1 = 100
let s2 = 300
let s3 = 600


console.log(Array.of(s1,s2,s3));