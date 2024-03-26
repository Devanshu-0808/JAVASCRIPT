//ES6 ke baad ki kahani hai

// jaise he "new" ko kaam me loge constructor call ho jaega
class user{
    constructor(username , email , password){
        this.username=username
        this.email=email
        this.password=password
    }
    //predefined method 
    encryptPassword(){
        return `${this.password }`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
   

}
const chai =new user("chai ", "chai@getComputedStyle.com" , "123")
console.log(chai.encryptPassword())
console.log(chai.changeusername())

// class syntax we dont get how we do it "behind the scene"
function User(username , email , password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword1=function(){
    return`${this.password}`
}
console.log( new User("chai ", "chai@getComputedStyle.com" , "123").encryptPassword1())