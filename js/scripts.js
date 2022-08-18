// Seleccionar contenido en HTML

// ---querySelector - Retorna 0 o 1 elemento/s---
// ---Si me equivoco en la forma de seleccionar el elemento no va pasar nada, simplemente sale como "null", por eso es que "retorna 0"---
// ---Retorna 1 porque sólo puedo seleccionar 1 SÓLO elemento, no puedo seleccionar más---

// ---Formas de seleccionar un elemento---
// const heading = document.querySelector("h2") // Selecciono todos los H2 del documento HTML
// heading = document.querySelector("#heading") // Selecciono elemento asignado por ID, el ID tiene que ser declarado y ÚNICO en el documento HTML
//const heading = document.querySelector(".header__texto h2") // Selecciono todos los H2 que están dentro de la clase .header__texto

// ---Todo lo que tenemos en el HTML puede ser manipulado o modificado mediante JavaScript---
// heading.classList.add("nueva-clase") // Selecciono el objeto heading y con el método/función .classList.add le agrego una nueva clase.
// heading.textContent = "Nuevo Heading" // Selecciono el objeto heading y con el método .textContent le cambio el texto.
// console.log(heading)



// ---querySelectorAll - Retorna 0 o todos los elementos existentes seleccionados, a diferencia del querySelector que máximo retorna 1. Tienen en común la misma sintaxis.

// const enlaces = document.querySelectorAll(".navegacion a") // Selecciono TODOS los elementos "a" que estén dentro de la clase .navegacion
// console.log(enlaces) // Acá me va logear todos los elementos.
// console.log(enlaces[0]) // Uso el [índice] para decirle: "bueno, de todos los enlaces que están en .navegacion, mostrame nomás el del índice 0"
// enlaces[0].textContent = "Nuevo texto para el enlace" // Lo mismo para modificarlo, si quiero modificar 1 en particular tengo que usar la sintaxis de objeto[índice].método para SÓLO modificar ese. Si yo sacaría el [índice] básicamente modificaría a todos.
// enlaces[0].classList.add("nueva-clase") // También puedo agregarle nuevas clases al elemento especificado (nota: no es necesario agregar el . ya que el método ya sabe que lo que voy a gregar es una clase)
// enlaces[0].classList.remove("navegacion__enlace") // También puedo remover clases


// //getElementById - OBSOLETO YA NO SE USA - Es obligatorio asignarle un ID al elemento HTML para llamarlo
// const heading2 = document.getElementById("heading")



// Crear contenido HTML

const nuevoEnlace = document.createElement("A") // Método para crear un elemento/etiqueta nueva en el HTML, entre los () se coloca el nombre de la etiqueta tal como en HTML pero sin los <> y es altamente recomendado por JS utilizar mayúsculas. 
console.log(nuevoEnlace) // Este enlace que creé está vacío, es decir, no tiene la propiedad href, una clase o un texto, etc. Por lo tanto se los voy a agregar.

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html"

// Agregar el texto
nuevoEnlace.textContent = "Tienda virtual"

// Agregar una clase
nuevoEnlace.classList.add("navegacion__enlace")

// Agregar el enlace al HTML, para que se vea.
const navegacion = document.querySelector(".navegacion") // Creo objeto "navegacion" seleccionando la clase .navegacion
navegacion.appendChild(nuevoEnlace) // Agrego el elemento nuevoEnlace con el método appendChild 