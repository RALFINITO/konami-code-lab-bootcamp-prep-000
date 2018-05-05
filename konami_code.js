const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var i = 0
function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown',konami)
}

function konami(e){
  key = parseInt(e.which)
  if(key===code[i]){
    i++
  } else{
    i = 0
  }
  if(i===code.length){
    alert("Hurrah!!!")
  }
}