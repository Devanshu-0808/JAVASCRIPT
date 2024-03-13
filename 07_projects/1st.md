# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript

const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function(button){
  console.log(button)
    button.addEventListener('click' , function(e){
          console.log(e)
          console.log(e.target) /// from which target it has camed pointer event or mouse event
          if(e.target.id==='grey')
          {
                body.style.backgroundColor="black";
          }
          else if(e.target.id==="white")
          {
                 body.style.backgroundColor="purple"
          }
          else if(e.target.id==="blue")
          {
            body.style.backgroundColor="green"
          }
          else{
            body.style.backgroundColor="brown"
          }
    })
});

```````
## project 2

````javascript


const form = document.querySelector('form');

//this usecase will give you empty
//const height= parseInt(document.querySelector("#height").value) ...
//while page loading it will store empty in height

//form jab bhi submit hota hai to ya to post type se submit hota hai ya to get type is submit hota hai lekin jab bhi submit hota hai uski values url me ya server ke pass chali jati hai(it is default action of form) toh ese rokna hoga kyuiki ham server me nhi hej rahe
//rokne ke liye hamare pass ek event ke upar he method milta hai

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); ///value is in string
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  let flag = 1;
  if (height === '' || height <= 0 || isNaN(height)) {
    flag = 0;
    results.innerHTML = 'Please give a valid height';
  }
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
    flag = 0;
  } else {
    if (flag === 1) results.innerHTML = weight / height ** 2;

    const br = document.createElement('br');
    let value = parseInt(results.innerHTML);
    let addText;
    if (value < 18.6) {
      addText = document.createTextNode('under weight');
    } else if (value >= 18.6 && value < 24.9) {
      addText = document.createTextNode('Normal weight');
    } else {
      addText = document.createTextNode('overweight');
    }
    results.appendChild(br);
    results.appendChild(addText);

    //OR
    //const bmi =(weight)/(height)**2;
    //result.innerHTML=`<span>{bmi}</span>`;
  }
});

````
