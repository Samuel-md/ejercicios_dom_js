// 3.1 Crear una lista ul > li con los países del array
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);



// 3.2 Eliminar el elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();



// 3.3 Crear una lista ul > li con los coches en el div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
divPrintHere.appendChild(ulCars);



// 3.4 Crear divs con h4 y img
const countryDivs = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
countryDivs.forEach(country => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = country.title;
  const img = document.createElement('img');
  img.src = country.imgUrl;
  div.appendChild(h4);
  div.appendChild(img);
  document.body.appendChild(div);
});



// 3.5 Eliminar el último div
const lastDiv = document.querySelector('div:last-child');
lastDiv.remove();



// 3.6 Crear un botón para eliminar cada div
const divsToDelete = document.querySelectorAll('div');
divsToDelete.forEach(div => {
  const button = document.createElement('button');
  button.textContent = 'Eliminar';
  button.addEventListener('click', () => div.remove());
  div.appendChild(button);
});
