// function SetUsername(username){
//      this.username=username
// }
// function createuser(username , email="devanshu", password){
//     SetUsername.call(username) // to hold reference
//     this.email=email
//     this.password=password
// }
// const chai= new createuser("chai" , "chai2@.com" , "123")
// console.log(chai)
function SetUsername(username){
    this.username=username
}
function createuser(username , email="devanshu", password){
   SetUsername.call(this ,username) // to hold reference
   this.email=email
   this.password=password
}
const chai= new createuser("chai" , "chai2@.com" , "123")
console.log(chai)
