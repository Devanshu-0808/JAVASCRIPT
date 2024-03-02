//objects can be declared by two types 1->literal , 2->constructor
//when we create object through constructor then it is singleton object
//when we create object through literal singleton is not created because multiple instances are created


//object literals
const Jsuser ={
    //key : value
    name : "Devanshu" ,//by default it take name as strings ......we can take key and value as any datatype 
    age : 18,
    location :"Jaipur" ,
    email : "devanshu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}
console.log(Jsuser.email)//it will fail to access key if it is created as string
console.log(Jsuser["email"])

// //how to add symbol in keys
// const my =Symbol("keys")

// const myuser ={
//    my : "devanshu"
// }

// console.log(myuser.my)
// console.log(typeof myuser.my)//it is not working as string

//correct it
// const my =Symbol("keys")

// const myuser ={
//    [my] : "devanshu"//if we use symbol inside object then we have to use [key]:value
// }

// console.log(myuser)//if we use symbol must me accessed by this

Jsuser.email="shreyansh@gmail.com"

// if you want that user won't be able to change the value then we use freeze

// Object.freeze(Jsuser)
Jsuser.email="devanshu@gmail.com"
console.log(Jsuser) // we can see that no change in email


//in JS funcations are treated like variables

Jsuser.greeting =function(){
    console.log("hello hello i am here")
}

console.log(Jsuser.greeting)//function excecute nhi hua hai sirf function ka reference aya hai
console.log(Jsuser.greeting())
console.log(Jsuser)
//if we want to use string interpolation as value 

Jsuser.greetingTwo=function(){
    console.log(`Hello js  user , ${this.name}`)//if we want to reference same object then we use  this
}
console.log(Jsuser.greetingTwo())
console.log(Jsuser.greeting)