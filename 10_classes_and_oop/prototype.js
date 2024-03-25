

let myheros =["thor" , "spiderman"]

let heroPower={
    thor :"hammer",
    spiderman :"sling",
    getspiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){
    console.log("devanshu is present")
}
heroPower.hitesh()
myheros.hitesh()

//inheritance
// every object is a seperate instance
const User ={
    name:"chai",
    email:"devanshu@.com"
}
const Teacher ={
    makevideo : true
}
const TeachingSupport ={
    isAvailable: false
}
const TASupport={
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User
//modern syntax
Object.setPrototypeOf(TeachingSupport , Teacher)
//TeacherSupport is accessing all property of teacher


//do by yourself factory function

let myName ="devanshu     "

//create truelength with removingspace
String.prototype.truelength =function(){
    console.log(`${this}`)//string ke andar this
     console.log(`${this.trim().length}`)
}
console.log(myName.truelength());

"shreayansh         ".truelength()