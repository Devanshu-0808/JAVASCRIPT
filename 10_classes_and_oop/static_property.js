class User {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
    // if you want to access of method to every object use "static"
    //restricting property access
    static createId(){
        return `123`
    }
}
const devanshu =new User("devanshu")
// console.log(devanshu.createId())//give error becoz of "static"

class Teacher extends User{
    constructor( username,email){
        super(username)
        this.email=email
    }
}
const iphone =new Teacher("iphone" , "i@phone.com")
iphone.logMe