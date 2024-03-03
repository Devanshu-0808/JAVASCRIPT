//code is packed and given name now this package we can use multiple time(copy) anywhere

//functions

function hello()
{
    console.log("d")
    console.log("e")
    console.log("v")
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("h")
    console.log("u")
}
// hello it is function reference   ... reference sirf batata hai ki ye waha rehta hai
// hello() it is function execute

hello()

function add(num1 , num2) ///num1 , num2 is parameters //function definition
{
    return num1+num2
}
console.log(add(3 , 4)) //3 ,4 arguments //function calling
console.log(add(3 , "4"))
console.log(add(3 , "a"))
console.log(add(3 , null))

function loginUserMessage(username)
{
    return `${username} just logged In`
}

console.log(loginUserMessage("Devanshu"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

/*In JavaScript, the following values are considered falsy:

false
0 (zero)
'' (empty string)
null
undefined
NaN (Not a Number) */

function loginUserMessage1(username)
{
    if(!username)
    {
        console.log("value daal bhai kya kar ra hai")
        return
    }
    return `${username} just logged In`
}
console.log(loginUserMessage1())


function loginUserMessage2(username ="sam") //default sam
{
    if(!username)
    {
        console.log("value daal bhai kya kar ra hai")
        return
    }
    return `${username} just logged In`
}
console.log(loginUserMessage2("Devanshu"))//Devanshu will overwrite on sam

