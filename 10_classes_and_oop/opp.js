//js base unit is object (object literal) like c++ has class
const user ={
    //4 properties
     username : "devanshu",
     loginCount:8,
     signedIn: true,
     getUserDetails : function(){
        console.log(`Username : ${this.username}`)
     }
}
// this keyword tell current context
console.log(user.username)
console.log(user.getUserDetails)