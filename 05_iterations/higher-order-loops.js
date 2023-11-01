// Map

const data = new Map();

data.set("Name:", "Nish");
data.set("Class:", "20BCS-15");
data.set("UID:", "20BCS5834");

for (const [key, value] of data) {
  // console.log(key , value);
}

// For-In loop

const gym = {
  name: "Anytime Fitness",
  location: "Kharar",
  Rating: "5 Star",
};

for (const key in gym) {
//   console.log(`${key}: ${gym[key]}`);
}

const arr = [12 ,23 ,4343 ,343 ]

arr.forEach( function (val){
// console.log(val);
} )

arr.forEach((val) =>{
    // console.log(val);
})

arr.forEach((val, index, arr) =>{
    // console.log(val , index, arr);
})