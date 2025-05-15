let сount = 0;
const output = document.getElementById("count");
function increment(){
  count++;
  output.textContent = count;
};
 
 function decrement(){
  count--;
  if (count < 0) {
    count = 0;
};
output.textContent = count;
}

function reset(){
  count = 0;
  output.textContent = count;
};
document.getElementById("increment").onclick = increment;
document.getElementById("decrement").onclick = decrement;
document.getElementById("reset").onclick = reset;
