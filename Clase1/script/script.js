//Query selector es muy parecido a CSS con la sintaxis.
const h1 = document.querySelector('h1');

//De esta manera es como podemos seleccionar todos los elementos del html.
const p = document.querySelector('p');
const parrafito = document.querySelector('#parrafito');
const pid = document.querySelector('.pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


