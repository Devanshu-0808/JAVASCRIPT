 const name ="devanshu"
 const repoCount =50

 console.log(name+repoCount)

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

 const gameName = String("Devanshu")

 console.log(gameName[0]);

 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.toLowerCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('v'));

 const newString = gameName.substring(7,2)

 console.log(newString);
 
 
 const anotherString =gameName.slice(-6 , 8)
 console.log(anotherString);

 const newStringOne="     devanshu     "// in google forms
console.log(newStringOne)
console.log(newStringOne.trim())//only work on new lin /n character and whitespace character

// if i get url -https://devanshu.com/devanshu devanshu..... with space then space is converted into %20 in url encoding
const url="https://devanshu.com/devanshu%20devanshu"

console.log(url.replace('%20' , '-'))

console.log(url.includes('devanshu')) //like find in c++ in true and false

//convert string to array
const hello= "dev-ansh-u-chat"
console.log(hello.split('-'))

//search string and get index

let string1 = "I love to code in JavaScript.";
let index = string1.search("z");

console.log(index);