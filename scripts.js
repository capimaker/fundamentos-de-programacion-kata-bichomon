let title = document;

console.log(document);

const titleElement = document.getElementById('gen-1'); // aquí obtengo el elemento id que hemos puesto en h2
titleElement.textContent = 'Generasion 1 Pokimon'; // aquí llamo a la variable y cambio el texto del h2 con el comando textContent por el que yo quiero

const cambioFondo = document.getElementById('gen-1'); // aquí llamo otra vez al id de h2
cambioFondo.style.backgroundColor = 'red'; // aquí cambio el color de fondo del h2 me he dado cuenta que se usa camelCase


console.log(window.location.href); // aquí imprimo la url de la pagina por consola

console.log(window.location.hostname); // aquí imprimo el nombre del host por consola

const imagen = document.getElementsByTagName('img'); // aquí llamo al id de la imagen
console.log(imagen); // aquí imprimo la imagen por consola

//Una alternativa para consolear la imagen una por una.

for (const img of imagen) {  // aquí llamo a la imagen individualmente y la imprimo por consola
    console.log(img);
  }
  


const imagenes = document.getElementsByTagName("img"); // aquí llamo a todas las imagenes por el tag name
console.log(imagenes); // aquí imprimo todas las imagenes por consola

for (let i = 0; i < imagenes.length; i++) { // aquí recorro todas las imagenes
  imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"; // aquí cambio la imagen por el gif que yo elija
}

const infocards = document.querySelectorAll(".infocard-lg-data.text-muted"); // Aquí selecciono todos los elementos con la clase 'infocard-lg-data text-muted' importante el punto porque es una clase

/* forEach es un método que se aplica directamente a los arrays. Recibe una función callback como argumento, que se ejecuta una vez por cada elemento del array. 
En este caso, la función callback recibe un argumento card, que representa cada uno de los elementos seleccionados por querySelectorAll.*/
infocards.forEach(card => { //Esto me va a permitir verificar si el enlace dentro de este contenedor tiene la clase 'itype flying'
  const flyingLink = card.querySelector(".itype.flying"); // Aquí selecciono el enlace dentro del contenedor que tiene la clase 'itype flying'
  
  if (flyingLink) { // Si el enlace existe, significa que el Pokémon tiene la clase 'flying'
    card.style.backgroundColor = "yellow";  // Cambiar el color de fondo si tiene la clase 'flying'
  }
});


