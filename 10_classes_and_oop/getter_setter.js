

class user{
    constructor(email , password){
    this.email=email
    this.password=password
    }
    //get karne ke kaam ata hai
    //name must me same
    // getter me return hota hai
    //setter me return nhi hota
    get password(){
        return this._password
    }
    //set karne ke kaam ata hai
    set password(value){
     this._password=value
    }
}
const devanshu =new user("dev@.com" , "asdgg")
console.log(devanshu.password)