//to get new instance use keyword "new"
// Promise introduced in ES6  as an by default library
// queue and bluebird to use .fetch , then , catch before promises was introduced

//promise create
const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    //DB calls , cryptography , network calls

    setTimeout( function(){
        console.log("Async task is complete");

        //resolve() must be connected with then() by using below
        resolve()
    }, 1000)
})

//promise consume
//resolve have connection with then
promiseOne.then(function(){
    console.log("Promise consumed")
})

//or short  way 

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    } , 1000)
}).then(function(){
    console.log("Promise consumed")
})

//parameter passing in promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username :"chai" , email :"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})
//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error =false//use true and check results
        if(!error){
            resolve({username:"devanshu" , password : "1243"})
        }else{
            reject("Error: Something went wrong")//reject give error
        }
    } , 1000)

})
// how to avoid call back hell
//chaining
//finally is used whether work is completed or not it is default
promiseFour.then((user)=>{
      console.log(user)
      return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolve or rejected")
})
// console.log(username1) // we cannot user this

//
const promiseFive=new Promise(function(resolve , reject){
    setTimeout(function(){
        let error =false//use true and check results
        if(!error){
            resolve({username:"js" , password : "1243"})
        }else{
            reject("Error: js went wrong")//reject give error
        }
    } , 1000)
})
//we can use ask await or then both
//async await cannot handle error directly // if we use error as true
async function consumePromiseFive(){
    const res = await promiseFive
    console.log(res)
}
consumePromiseFive()

//user below code to handle error

/*async function consumePromiseFive(){
   try(){
     const res = await promiseFive
    console.log(res)
   }
   catch(error){
    console.log(error);
   }
}
consumePromiseFive()*/


// where its is used lets see Api->https://jsonplaceholder.typicode.com/users
//in async await if things take time then we have to use 'await' keyword 

// async function getAllUsers(){
//     try{
//     const res=await fetch("https://jsonplaceholder.typicode.com/users")//fetch is network request
    
//     const data= await res.json() // string to object
//     console.log(data)
//     } 
//     catch(error){
//       console.log("E:" , error)
//     }
// }
// getAllUsers()

//now same thing if we use .then() and catch()

fetch("https://jsonplaceholder.typicode.com/users")
.then((val)=>{
    return val.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

//as we can see that data is showing uppward in terminal rather than sequentially see in next video