// inheritance in class

class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
//in object me use "call()" in class we user "super()"
class Teacher extends User{
    constructor( username,email , password){
        super(username)//extended class ke andar jata hu or constructor function ko execute karta hu
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`a new course was added ${this.username}`)
    }
}
const chai = new Teacher("chai" , "chai@.com" , "123")
chai.addCourse()

//check whether variable is instance of so use "instanceof""
console.log(chai  instanceof Teacher)