// Imediately Invoked Function Expression (c)

(function chai(){
    console.log("Hello from chai");
}) ();

//If we want to execute two IIFE then it must be separated the `;`

((coffee) =>{
    console.log(`I love ${coffee}`);
}) ("Nescafe")