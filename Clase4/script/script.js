const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');

//Ad
const result = document.querySelector('#result');

btn.addEventListener('click', btnOnClick)
// Aqí declaramos la función que llamaremos dentro del HTML
function btnOnClick() {
  let resultado = parseInt(input1.value) + parseInt(input2.value);
  result.innerText =`Resultado: ${resultado}`;
}





