const marvel_heroes =["thor" , "Ironman" , "spiderman"]
const dc_heroes =["superman" , "flash" , "batman"]

//wrong merging
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// to resolve prev problem --->concat operATOR
// const allheros=marvel_heroes.concat(dc_heroes)
// console.log(allheros)

//or -->spread(...)
const allheros=[...marvel_heroes ,...dc_heroes]
console.log(allheros)

//flating array
const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=arr.flat(Infinity)//depth is 3 but hacks we use infinity
console.log(real_arr)

// when we do data scraping when we select data from webpage so sometime it come in dif format (nodelist , objects , strings) but we want in array
//then we use 

console.log(Array.isArray("devanshu chatterjee"))//true or false
console.log(Array.from("devanshu chatterjee"))//convert (string , nodelist , object)  into array

//another method

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1 , score2 , score3))

//sorting and reversing
console.log(real_arr.sort())
console.log(real_arr.reverse())

console.log()