function one(){
    const username = "NIsh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two()
}

one()


//++++++++++++ Function Declaration +++++++++++++++

console.log(addNum(5)); //no error 
function addNum(Num){
    return Num + 1;
}

// console.log(addNum2(4)); //Gives error bcoz function is holded in the variable and called before declaration
const addNum2 = function(Num){
    return Num + 1;
}
console.log(addNum2(8));
