const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

document.body.addEventListener("keydown", init)

function init(event) {
  debugger;
  let keys = [];
  let key = event.which;
  if (key == code[index]){
    index++;
    if(index === code.length){
      alert("YOU DID IT MAN, WE BELIVED IN YOU (obviously, I mean who wouldn't.... right?)");
    }
  }
  else if {
    index = 0;
  }
