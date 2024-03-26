const discripter=Object.getOwnPropertyDescriptor(Math,"PI")
// Math.PI=5
// console.log(Math.PI) //wont override
console.log(discripter)

// can we create our object and do same restriction

const chai ={
    name:"devanshu",
    price : 250,
    isAvailable : true
}
// console.log(chai)
// console.log(Object.getOwnPropertyDescriptor(chai ,"name"))
// Object.defineProperty(chai ,"name" ,{
//     writable: false,//you wont be able to change the value
//     enumerable: false // you wont be able to iterate in object
// })


console.log(Object.getOwnPropertyDescriptor(chai ,"name"))
for(let [key , value] of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
}