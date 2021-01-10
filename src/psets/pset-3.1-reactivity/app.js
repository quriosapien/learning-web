
const inputbox = document.getElementById("inputbox");
const displaybox = document.getElementById("displaybox");

function dataBinding () {
  displaybox.innerText = inputbox.value;
}

inputbox.addEventListener('input', dataBinding)