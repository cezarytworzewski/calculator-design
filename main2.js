/* let btn = document.querySelector('btn');
btn =  */


function policz() {
    let input1 = document.getElementById('numer1').value;
    let input2 = document.getElementById('numer2').value;
    let output1 = document.getElementById('outputFirst');

    let suma = Number(input1) + Number(input2);
    let roznica = input1 - input2;
    let iloczyn = input1 * input2;
    let iloraz = input1 / input2;

    output1.innerHTML += `<br/>Suma to: ${suma} <br/> Roznica to: ${roznica} <br/> Iloczyn to: ${iloczyn} <br/> Iloraz to: ${iloraz} <hr>`;
}

function policz2() {
    let input3 = document.getElementById('numer3').value;
    let input4 = document.getElementById('numer4').value;
    let operator = document.getElementById('operator').value;
    let output2 = document.getElementById('outputSecond');


    if (operator === '+') {
        let suma;
        suma = Number(input3) + Number(input4);
        output2.innerHTML += `<br/>Suma to: ${suma} <br/>`;
    } else if (operator === '-') {
        let roznica;
        roznica = input3 - input4;
        output2.innerHTML += `<br/>Różnica to: ${roznica} <br/>`;
    } else if (operator === '*') {
        let iloczyn;
        iloczyn = input3 * input4;
        output2.innerHTML += `<br/>Iloczyn to: ${iloczyn} <br/>`;
    } else if (operator === '/') {
        let iloraz;
        iloraz = input3 / input4;
        output2.innerHTML += `<br/>Iloraz to: ${iloraz} <br/>`;
    }


}