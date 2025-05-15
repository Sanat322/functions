let сount = 0;
const output = document.getElementById("count");

document.getElementById("increment").onclick = () => {
  count++;
  output.textContent = count;
};

document.getElementById("decrement").onclick = () => {
  count--;
  if (count < 0) {
    count = 0;
};
output.textContent = count;
}
document.getElementById("reset").onclick = () => {
  count = 0;
  output.textContent = count;
};