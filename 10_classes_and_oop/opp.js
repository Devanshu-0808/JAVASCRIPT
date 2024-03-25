//js base unit is object (object literal) like c++ has class
const user ={
    //4 properties
     username : "devanshu",
     loginCount:8,
     signedIn: true,
     getUserDetails : function(){
        console.log(`Username : ${this.username}`)
        console.log(this)
      }
}
// this keyword tell current context
console.log(user.username)
user.getUserDetails()
console.log(this)//global context will be {}
//but if you check in browser (browser has multiple api , DOM , Browser request are present) do we get global object name "Window"

//so if i want to create user2 then i have create again object it is hecktick
// const user2 ={
//    //4 properties
//     username : "devanshu",
//     loginCount:8,
//     signedIn: true,
//     getUserDetails : function(){
//        console.log(`Username : ${this.username}`)
//        console.log(this)
//      }
// }

// so for resolving this we use construction

// "new" is constructor function allows you to create multiple insatnce from single object literal
// const promiseOne = new Promise()
// const date = new Date()

function User(username , loginCount , isLoogedIn){
     this.username=username 
   this.loginCount=loginCount
   this.isLoogedIn=isLoogedIn

   return this // if you remove "return this" then also it will implicitly give same
}

const userOne1 =User("hitesh" , 12 ,true )
console.log(userOne1)
console.log(userOne1.loginCount)

//user 2 
const userOne2 = User("chaiAurCode" , 11 , false)
console.log(userOne1)
//userOne2 has override  problem for us
//thats why we use "new" keyword it provide new instance

const nuserOne1 = new User("hitesh" , 12 ,true )
const nuserOne2 =  new User("chaiAurCode" , 11 , false)
console.log(nuserOne1)

/*some keypoints
  when we use "new" then
  1-> new empty object is created named as instance
  2-> a constructor function is called due to "new" its just rap
      the argument in it and give us
*/
// constructor property is reference of it self
console.log(userOne1.constructor)

// look instanceof property





//js default behaviour is prototypal behaviour
// arrow functions me "this" use nhi kar shakte beacause of protype
//due to prototype behaviour me get access of "this" , classes , inheritance
// prototypal behaviour means har nhi manna