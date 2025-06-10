// 4.1 Añadir un botón con id btnToClick y mostrar la información del click
const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Haz click';
btnToClick.addEventListener('click', (event) => {
  console.log(event);
});
document.body.appendChild(btnToClick);



// 4.2 Añadir un evento 'focus' que ejecute un console.log con el valor del input
const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value);
});



// 4.3 Añadir un evento 'input' que ejecute un console.log con el valor del input
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', (event) => {
  console.log(event.target.value);
});



// 4.4 Crear una lista ul > li con los albums del array
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const ulAlbums = document.createElement('ul');
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ulAlbums.appendChild(li);
});
document.body.appendChild(ulAlbums);
