// const score =100

// const balance = new Number(200)//new is used to create an instance of user defined object

// console.log(balance.toString())
// console.log(balance.toFixed(4))

// const number =23.243345

// console.log(number.toPrecision(3))//precesion( returns string) is from before decimal
// console.log(number.toPrecision(1))

// const hundreds =100000000

// console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// const dev=Number.MAX_VALUE
// const dev1=Number.MIN_VALUE
// const dev3=Number.MAX_SAFE_INTEGER
// console.log(dev)
// console.log(dev1)
// console.log(dev3)

//++++++++++++++++++++++++++++maths+++++++++++++++++++

console.log(Math.abs(-4))//absolute
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.max(4.5 , 6 , 1,2))
console.log(Math.min(4.5 , 6 , 2,1))
console.log(Math.pow(5 , 2))
console.log(Math.sqrt(9))
console.log(Math.log2(4))
console.log(Math.log10(100))


console.log(Math.random())// range from 0 to 1
console.log((Math.random()*10)+1)// range from 0 to 10 ---also used to avoid case 0.021 we add 1

///formula easy one
const mini =10
const maxi =20

console.log(Math.floor(Math.random()*(maxi - mini +1)+mini))
