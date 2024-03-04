// foreach loop .....it is higher order function
//foreach do not return anything
const arr =["dev" , "chat" , "ja" , "bey"]
///function we use is call back it dont have name
arr.forEach( function (item) {
       console.log(item);
}  )


// foreach we use arrow function 
arr.forEach((item)=>{
    console.log(item)
})

// or

arr.forEach((item , index , arr)=>{
    console.log(item , index , arr)
})


//basic function
function print(item){
    console.log(item)
}
arr.forEach(print)

const myCoding =[
    {
        languageName : "javascript"
    },
    {
        languageName : "c++"
    },
    {
        languageName : "java"
    },
    {
        languageName : "html"
    },
]

// values comes from databases are in the form of array
myCoding.forEach((item , index , a)=>{
            console.log(item , index , a)
})

// can we take values from foreach and do operations?
// const value= myCoding.forEach((item)=>{
//       return item
// })
// console.log(value) // undefined so we cannote return it so how we get value


