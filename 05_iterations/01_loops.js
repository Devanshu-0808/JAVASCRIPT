// for loop

for(let i=0 ; i<10 ; i++){

    console.log(i);
    
}

for (let i = 1; i <=10; i++) {
    for(let j=1 ; j<=10 ; j++)
    {
        console.log(`${i} *${j} = ${i*j}`);
    }
    console.log();
    
}

//***************************** 
let arr =["devanshu" , "chatterjee" , "shreyansh" , "chatterjee"]

for(let i=0 ; i<arr.length ; i++)
{
    console.log(arr[i])
}

//****************************** 
//break
for(let i=0 ; i<10 ; i++){

    if(i==6) break;
    console.log(i);
    
}
//continue
for(let i=0 ; i<10 ; i++){

    if(i==6) continue;
    console.log(i);
    
}