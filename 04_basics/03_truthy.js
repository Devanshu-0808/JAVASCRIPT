const userEmail ="devanshu@.com"

if(userEmail){
    console.log("Got user")
}
else{
    console.log("Dont have user email")
}

//  all falsy value 
/* false , -0  , 0n (BigInt) , "" , null , undefined , Nan  */

//thruthy value  
/*  "0" , 'false' , " " , [] , {} , function(){}     ....empty function
*/

//check array empty
const user=[]
if(user.length===0){
    console.log("empty array")
}

//check object empty

const obj ={}

if(Object.keys(obj).length===0){
    console.log("objects is empty")
}

//Nullish Coalescing Operator  (??)    ->null  undefined
//why we use it because when we call from database so dont get directly response we get two values 
// so there is chance of geting null or undefined in that case our code structure get disturbed
let val1 ;
val1=5 ?? 10
console.log(val1)

val2=null??10
console.log(val2)

val3=null??undefined
console.log(val3)

val3=null??null
console.log(val3)


val4=null??null??10??20??30
console.log(val4)

//Terniary Operator
//syntax
// condtion ? true : false

const val=10

val>5 ? console.log("yes") : console.log("no")