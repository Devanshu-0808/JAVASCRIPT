//variables are very powerfull in JS they can hold any thing JSON , function , array , object
function one(){
    const username ="Devanshu"

    function two(){
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)     //error

    // two()
}
one()

if(true)
{
    const username="devanshu"
    if(username==="devanshu"){
        const website =" youtube"
        console.log(username+website)
    }
    // console.log(website)   //error variable has scope limited
}
// console.log(username) // //error same scope problem

// +++++++++++++++++++++++++++++++++interesting+++++++++++++++

console.log(add(5)) /// function calling can be used before function declaration
function add(num)
{
   return num+1
}


//
// value(5) // we cannot call expressions like this 
const value =function(num) //they are known as expressions
{
    return num+2

}