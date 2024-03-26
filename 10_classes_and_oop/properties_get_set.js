// function based 
function user(email , password){
    this._email=email
    this._password=password
                                  //konsi ap overrite karna cahte ho  
    Object.defineProperty(this , "email"  , {
        get: function(){
            return this._email.toUpperCase()
        },
            set: function(value){
                this._email=value
            }      
        
    })
}
const devanshu=new user("chai@.com" , "chai")
console.log(devanshu.email)