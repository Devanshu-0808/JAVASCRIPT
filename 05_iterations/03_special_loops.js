//they are array specific loop

//["" , "" , ""]
//[{} , {} , {}]

// for of loop
const arr =[1,2,3,4,5]

for (const val of arr) {
    console.log(val)
}

const str ="hello world"

for (const val of str) {
    console.log(val)
}

// new datatype  ->Maps

const map= new Map()
map.set("In"  , "INDIA")
map.set("USA"  , "United States Of America")
map.set("FR"  , "France")

console.log(map);

for (const key of map) {
    console.log(key) // give array
}

// but i want value and key so how to destructure it

for (const [key , value] of map) {
         console.log(key , value)
}

//object

const obj ={
    "game1":"NFS",
    "game2":"Spiderman"
}


// we cannot iterate in obj like this
// for (const [key , value] of obj) {
//     console.log(key , value)
// }

// we can use forin loop inm object and multiple other
for (const key in obj) {
    console.log(key , obj[key])
}

//forin in array 
const prog =["js" , "c++" ,"python" ,"java"]
for (const key in prog) {
   console.log(key , prog[key])
}

//map  (not iteratable) using forin

for (const k in map) {
    console.log(k)
}

