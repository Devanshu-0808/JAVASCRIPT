//destructuring of array and objects here we se destructuring of objects
//objects help in creating API

const course ={

    coursename:"js in hindi",
    price : "999",
    courseInstructor : "Devanshu"
}
console.log(course["coursename"]);//it is long more simplified is below
//object destructuring
const {courseInstructor :short} = course//more simplified ....short is shortname of courseinstructor
console.log(short)

//apna kaam dusre ke sir par dena is API
//if you order food from menu hamari tension nhi hai ki wo kahana kaha se lara hai ....menu card is like API documentation
//like anyone click on google login  we dont have hacktick of that how google will verify him or whether he is registered or not 
//API -we get value from backend and how we write that values long time ago it come in XML(complex) nowdays that value we get in JSON
/* how jason looks like

{        //name unlikeobjects
    name:"devanshu",
    coursename : "hellow ",
}

or  some times we get API in the formate of array (inside that multiple objects) like

[
    {},
    {},
    {},
]


JSON is javascript object notation
*/

