## project 6

````js
const randomcolor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let le;
document.querySelector('#start').addEventListener('click', function () {
  if(!le){
  le = setInterval(function () {
    document.querySelector('body').style.backgroundColor = randomcolor();
  }, 1000);
}
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(le);
  le=null
});


````

## project 5

```` js
const insert=document.querySelector("#insert")

window.addEventListener("keydown" , function(e){
  insert.innerHTML=`<div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key ===" "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
</div>`   
})

````