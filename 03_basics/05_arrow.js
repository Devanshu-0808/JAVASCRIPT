const user={
    username : "devanshu",
    price : 999,

    welcomeMessage: function(){
          console.log(`${this.username} welcome to website`)
          console.log(this)    
    }
}
//this is for current context
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)
// this in node refered as empty object

// but in window this referred to ....plz check  console.log(this)
//why this happen because previously in using JS option was on browser so the engine which execute JS was in only one place(inside browser)
//now days  engines are out from browser and named as node , deno , bun
// Note-----> window has global object named Window  (imp)

// we cannot use this in function we only use in objects
// function chai(){
//      let username ="devanshu"
//      console.log(this);
// }
// chai()

///short trick //arrow function
const chai = () =>{
    let username ="devanshu"
    console.log(username);
}
chai()

//arrow function basic syntax ()=>{}
 const addtwo =(parameter1 , parameter2) =>{
          return parameter1+parameter2
}


//implicit return in arrow function single line execution(dont write return in it)

   const addtwo1 =(parameter1 , parameter2) => (parameter1+parameter2)

console.log(addtwo1(3,4))



//explicit means return lagana padra hai

