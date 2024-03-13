# Projects related to DOM

## project link
[click here](link)



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
