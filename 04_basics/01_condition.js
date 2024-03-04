//comparision operator
/*
<
>
<=
>=
==
!=
===
!==
*/

//conditional statement    --> real life usage rating in apps
//1st-> if else

const isuserLoggedIn=true
if(isuserLoggedIn)
{
    console.log("Yes")
}

const temp=51
if(temp<50)
[
    console.log("less then 50")
]
else
{
    console.log("50 or greater than")
}

//short hand notation 
//implicit scope
if(temp>50) console.log("hello")


//nested if else
const balance =1000
if(balance <500)
{
    console.log("less")
}
else if(balance<750){
    console.log("less then 750")
}
else
{
    console.log("less than 1200")
}


//real life
const userLoggedIn=true
const debitcard=true

if(userLoggedIn && debitcard){
    console.log("Allow to buy course")
}

//logical operator
//&& ->and operator
//|| ->or operator

