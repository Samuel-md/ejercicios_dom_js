// 1.1 Mostrar el botón con la clase .showme
const showmeButton = document.querySelector('.showme');
console.log(showmeButton);

// 1.2 Mostrar el h1 con el id #pillado
const pillado = document.querySelector('#pillado');
console.log(pillado);

// 1.3 Mostrar todos los elementos <p>
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

// 1.4 Mostrar todos los elementos con la clase .pokemon
const pokemonElements = document.querySelectorAll('.pokemon');
console.log(pokemonElements);

// 1.5 Mostrar todos los elementos con el atributo data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// 1.6 Mostrar el tercer personaje con el atributo data-function="testMe"
const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);
