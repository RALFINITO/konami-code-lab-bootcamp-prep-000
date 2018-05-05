const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 1
function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown',konami)
}

function konami(e){
  key = parseInt(e.which)
  if(key===code[i]){
    i++
    console.log
  } else{
    i = 1
  }
  if(i===code.length){
    alert("Hurrah!!!")
  }
}