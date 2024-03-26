const user = {
    _email:"dew@.com",
    _password:"12325445",

    get email(){
         return this._email.toUpperCase()
    },
    set email(value){
         this._email= value
    }
}
const tea = Object.create(user)//user ke base par object create karo or tea me dal do
console.log(tea.email);        // it is factory function
