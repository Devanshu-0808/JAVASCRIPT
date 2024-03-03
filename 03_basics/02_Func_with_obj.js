// when we create projects of e commerce app int that customer add multiple items in shopping cart
//so we dont know that how many item he will select in that so we add price of it 
//(we dont know how many argument ane wale hai) 

//mainly we can se that arguments are 6 but parameter is one
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200 , 20 ,1,2,4,6))

// so to remove this problem we use 
//operators ---> rest , spread both is denoted with (...) only differ by there meaning see further 

function calculateCartPrice1(...num1){ ///rest operator
    return num1
}
console.log(calculateCartPrice1(200 , 20 ,1,2,4,6))

function calculateCartPrice2( val1 , val2,...num1){
    return num1
}
console.log(calculateCartPrice2(200 , 20 ,1,2,4,6))


//

const user = {
     username: "devanshu",
     price : 189
}
//parameter is anyobject which is used for generic because any user can come
function handleobject(anyobject)
{
     console.log(`username is :${anyobject.username} and price is${anyobject.price}`)
}
handleobject(user);
//or
// objects can be passed as argument like this
handleobject({
    username: "devanshu",
     price : 189
})

//in case inside object user prices but we are using in function anyobject.price so it will throw error
//and also argument we passed is object or not NO GUARRENTEE
// So thats why everyone prefer typescript because type checking done there
// in js we have to use if() ans else to check


// array as argument
const arr =[200 , 400 , 100 , 600]

function returnsecondvalue(getarray)
{
         return getarray[1]
}
console.log(returnsecondvalue(arr));