console.log('JavaScript');

let nickName = 'ciasteczko';

console.log(nickName);

/* document.body.textContent = nickName;
document.body.textContent += 'dupa'; */

nickName = 'Czarek';
console.log(nickName);
// document.body.textContent += nickName

let number1 = 2;
let number2 = 69;
let suma, iloraz, iloczyn, roznica;

suma = number1 + number2;
iloraz = number1 / number2;
iloczyn = number1 * number2;
roznica = number1 - number2;
//document.body.textContent = suma;

document.body.innerHTML += `<br/>Suma liczba to:  ${suma} <br/>
  Iloraz liczb to: ${iloraz.toFixed(4)} <br/> Iloczyn liczb to: ${iloczyn} <br/>Różnica liczb to: ${roznica}`;

// dodać nowa linia po każdym


// 3 * (4 + 6) * 7

// Number na prompt - sprawdzić !!
let number3 = prompt('Podaj liczbę');
console.log(number3);
let number4 = prompt('Podaj liczbę');
suma1 = Number(number3) + Number(number4);
iloraz1 = number3 / number4;
iloczyn1 = number3 * number4;
roznica1 = number3 - number4;
document.body.innerHTML += `<br/>Suma liczba to:  ${suma1} <br/>
  Iloraz liczb to: ${iloraz1.toFixed(4)} <br/> Iloczyn liczb to: ${iloczyn1} <br/>Różnica liczb to: ${roznica1}`;