

var button = document.querySelectorAll('.button');
var btnDisplay = document.getElementById("buttonDisplay");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', numberOutputDisplay);
}

function numberOutputDisplay() {
    btnDisplay.value = btnDisplay.value + this.value;
    
    if (this.value === "C") {
        btnDisplay.value = "0";
    }
   
   
    
}