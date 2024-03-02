//Dates

let mydate = new Date() //we have created object Date() whose instance is myDate
console.log(mydate);
console.log(typeof mydate);
console.log( mydate.toString());
console.log( mydate.toLocaleString());
console.log( mydate.toJSON());
console.log( mydate.toLocaleTimeString());

let myCreateddate = new Date(2023 , 0 , 23 , 5 ,3)/// year,month,date
console.log(myCreateddate.toLocaleString())

let mdate=new Date("01-14-2023")//mm dd yyyy
console.log(mdate.toLocaleString())

//timestamp
let mytimestamp = Date.now()
console.log(mytimestamp)//milisecond value from 1st jan 1970

//if we create hotel dates we compare dates so we compare timestamp
console.log(mytimestamp)
console.log(myCreateddate.getTime())

//convert into seconds
console.log(Math.floor(Date.now()/1000))

//more methods
console.log(mydate.getMonth()+1)
console.log(mydate.getDay())//satureday
console.log(mydate.getDate())

//string interpolation is used when we want to write date in particular sequence
console.log(`date is ${mydate.getDate()} month is ${mydate.getMonth()} and year is ${mydate.getFullYear()}`)

mydate.toLocaleString('default ', {
       weekday  : "long"//weekday was MON but we want full MONDAY
      
})
