//Query selector es muy parecido a CSS con la sintaxis.
const h1 = document.querySelector('h1');

//De esta manera es como podemos seleccionar todos los elementos del html.
const p = document.querySelector('p');

// Con query selector debemos ponerle la sintaxis como la de CSS para que lo reconozca.
const parrafito = document.querySelector('.parrafito'); 

// Cuando usamos getElemetnById es obvio que un id necesitamos por lo que no es necesario ponerle el #.
const pid = document.getElementById('pid'); 

// De igual manera que si lo estemos haciendo con una clase ya no necesitamos ponerle el punto para identificarlo.
const parrafito2 = document.getElementsByClassName('parrafito')

const input = document.querySelector('input');

//Escribiendo contenido en el HTML desde JS.

// Con inner.HTMl podemos escribir html dentro del mismo.
h1.innerHTML = "Patitio <br> Feo"; 

// Con inner.Text ya no podemos escribir html dentro del mismo
h1.innerText = "Patitio <br> Feo";

// Con esto leemos un atributo de la etiqueta seleccionada.
console.log(h1.getAttribute('class')); 
//PrimerAtributo

// Así podemos cambiar el valor de una atributo, en este caso cambiamos el valor del atributo class (sobreescribimos el anterior).
h1.setAttribute('class','SegundoAtributo'); 

//Imprimimos para verificar.
console.log(h1.getAttribute('class'));
//SegundoAtributo 

// De esta manera podemos agregarle otro atributo (Ahiora ya tiene 2 atributos).
h1.classList.add('azul'); 

//Imprimimos para verificar.
console.log(h1.getAttribute('class')); 
//SegundoAtributo azul

//De esta manera borramos un elemento del atributo.
h1.classList.remove('SegundoAtributo');

//Imprimimos para verificar.
console.log(h1.getAttribute('class')); 
// azul

// Con este modificamos el valor de value desde JS
input.value = '456'; 

//De esta manera creamos elementos HTML, en este caso una etiqueta imagen y lo guardamos en la variable img.
const img = document.createElement('img'); 

//De esta manera lo que hacemos es asignarle al atributo img una imagen en su propiedad src.
img.setAttribute('src','https://media.licdn.com/dms/image/D5622AQHAXyjSjAqnug/feedshare-shrink_2048_1536/0/1701277125577?e=1705536000&v=beta&t=GFzMGrDYDqQkh5P0dIvD6cwZ_LHis83ef-gCP-JUcxo');

//Ahora vamos a inyectar ese elemento dentro del HTML en el parrafo pid.
pid.append(img); // Inyecta el contenido sin sobreescribir lo que tenía antes.




