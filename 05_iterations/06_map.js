// in map we cannot condition like we give in filters
// return array
const num =[1,2,3,4,5,6,6,7,8,9,10]

const n=num.map((num) => num+10)
console.log(n)

const n1=num.map((num) => {
    return num+10
})
console.log(n1)

//chaining num.map().map().map().filter().........
const num1 =[1,2,3,4,5,6,6,7,8,9,10 ,11]

const value=num1
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)

console.log(value)