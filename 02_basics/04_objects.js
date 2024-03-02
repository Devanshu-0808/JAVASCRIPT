const tinderUser =new Object()//singleton object
// const tinderUser1={}//non singleton object

tinderUser.id="123abc" //because user registered in database
tinderUser.name ="sanmmy"
tinderUser.isLoggedIn =false
console.log(tinderUser);

//object inside object
const regularuser={
    email:"some@gmail.com",
       uname:{
           fullname:{
            userfulname:{
               firstname: "devanshu",
               lastname : "chatterjee"
            }
           }
          
    }
}
console.log(regularuser.uname.fullname.userfulname.firstname);

//combining or merging objects

const obj1={ 1 : "a" , 2 : "b"}
const obj2={ 3 : "a" , 6 : "b"}
const obj3={ 4 : "a" , 5 : "b"}

const resultobj=Object.assign(obj1 , obj2)//it merge obj2 into obj1
console.log(Object.assign({},obj1 , obj2 , obj3)) //it merges obj2 and obj1 and obj3 into empty object
 console.log(resultobj===obj1)

 //or -->spread operator

 const obj4={...obj2,...obj3}
 console.log(obj4)

 // objects inside array

 const users =[
    {
        id:1,
        email:"devanshu@.com"
    },
    {
        id:2,
        email:"shreyansh@.com"
    },
    {
        id:3,
        email:"ajay@.com"
    }
 ]

    ///how to access it
    console.log(users[0].id)

// imp if we want to get all keys and values in object in array

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

//each key and value is like [[key1 , value1] , [key2 , value2]]
console.log(Object.entries(tinderUser))

//when we loop through object we get one value if that value is not exist then there is chances of crash so we use 
 
console.log(tinderUser.hasOwnProperty('isLoggedIn'))