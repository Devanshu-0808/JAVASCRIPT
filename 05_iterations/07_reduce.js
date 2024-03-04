//reduce()  it returns value also uses accumulator
//used for adding mainly
const arr =[1,2,3,4,5]
//0+1+2+3+4


//syntax num.reduce((acc , curr)=>{} ,0)
const ans=arr.reduce((acc , curr)=>{
       return acc+curr 
} ,0) //from where i want to start accumulator

console.log(ans)


const shoppingcart =[
    {
        itemName : "js",
        price: 999
    },
    {
        itemName : "c++",
        price: 99
    },
]

const k=shoppingcart.reduce(( acc,obj)=>{return acc+obj.price} , 0)
console.log(k)