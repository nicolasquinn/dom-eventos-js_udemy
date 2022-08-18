// Seleccionar contenido en HTML

// ---querySelector - Retorna 0 o 1 elemento/s---
// ---Si me equivoco en la forma de seleccionar el elemento no va pasar nada, simplemente sale como "null", por eso es que "retorna 0"---
// ---Retorna 1 porque sólo puedo seleccionar 1 SÓLO elemento, no puedo seleccionar más---

// ---Formas de seleccionar un elemento---
// const heading = document.querySelector("h2") // Selecciono todos los H2 del documento HTML
// heading = document.querySelector("#heading") // Selecciono elemento asignado por ID, el ID tiene que ser declarado y ÚNICO en el documento HTML
const heading = document.querySelector(".header__texto h2") // Selecciono todos los H2 que están dentro de la clase .header__texto

// ---Todo lo que tenemos en el HTML puede ser manipulado o modificado mediante JavaScript---
heading.classList.add("nueva-clase") // Selecciono el objeto heading y con el método/función .classList.add le agrego una nueva clase.
heading.textContent = "Nuevo Heading" // Selecciono el objeto heading y con el método .textContent le cambio el texto.
console.log(heading)


//querySelectorAll

//getElementById