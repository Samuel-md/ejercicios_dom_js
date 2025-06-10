// 2.1 Insertar un div vacío
const divEmpty = document.createElement('div');
document.body.appendChild(divEmpty);


// 2.2 Insertar un div con una p dentro
const divWithP = document.createElement('div');
const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = 'Texto dentro del div';
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);


// 2.3 Insertar un div con 6 p usando un loop
const divWith6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i + 1}`;
  divWith6P.appendChild(p);
}
document.body.appendChild(divWith6P);


// 2.4 Insertar una p con el texto 'Soy dinámico!'
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);


// 2.5 Insertar el texto 'Wubba Lubba dub dub' en el h2 con clase .fn-insert-here
const fnInsertHere = document.querySelector('.fn-insert-here');
fnInsertHere.textContent = 'Wubba Lubba dub dub';


// 2.6 Crear una lista ul > li con los textos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);


// 2.7 Eliminar todos los nodos con la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
  element.remove();
});


// 2.8 Insertar p con el texto 'Voy en medio!' entre los dos div
const divs = document.querySelectorAll('div');
const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
divs[0].parentNode.insertBefore(pMiddle, divs[1]);


// 2.9 Insertar p con el texto 'Voy dentro!' dentro de todos los div con clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('.fn-insert-here');
insertHereDivs.forEach(div => {
  const pInside = document.createElement('p');
  pInside.textContent = 'Voy dentro!';
  div.appendChild(pInside);
});
