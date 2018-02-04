const btn = document.querySelectorAll('.button');
const calcInput = document.getElementById('buttonDisplay');



// funkcja pokazuje na ekranie liczby
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', insertValue);
}


function insertValue() {
  calcInput.value += this.value;

  if (this.value === "C") {
    calcInput.value = "0";
  }
  if (this.value === "=") {
    licz();
  }
}

function licz() {
  console.log('aaa');
}





