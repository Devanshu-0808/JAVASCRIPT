// Immediately Invoked Function Expresseions(IIFE)
// it is used to remove global scope pollutions

//immediately execute function 

(function chai(){
    //named IIFE
   console.log("db connected")
})();

//syntax of IIFE
//()();   ....first ()->function definition , second()->function call always use ";" at end

// arrow function in IIFE
(()=>{
    console.log("Hellow")
})();


((parameter)=>{
    console.log(`Hellow ${parameter}`)
})(argument="devanshu");