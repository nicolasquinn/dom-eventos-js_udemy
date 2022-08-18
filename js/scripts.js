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

// const nuevoEnlace = document.createElement("A") // Método para crear un elemento/etiqueta nueva en el HTML, entre los () se coloca el nombre de la etiqueta tal como en HTML pero sin los <> y es altamente recomendado por JS utilizar mayúsculas.
// console.log(nuevoEnlace) // Este enlace que creé está vacío, es decir, no tiene la propiedad href, una clase o un texto, etc. Por lo tanto se los voy a agregar.

// // Agregar el href
// nuevoEnlace.href = "nuevo-enlace.html"

// // Agregar el texto
// nuevoEnlace.textContent = "Tienda virtual"

// // Agregar una clase
// nuevoEnlace.classList.add("navegacion__enlace")

// // Agregar el enlace al HTML, para que se vea.
// const navegacion = document.querySelector(".navegacion") // Creo objeto "navegacion" seleccionando la clase .navegacion
// navegacion.appendChild(nuevoEnlace) // Agrego el elemento nuevoEnlace con el método appendChild




// Eventos

// Todos los sitios web están llenos de eventos, como un scroll, un click, cuando llenás un formulario, etc. Por ejemplo, crear una playlist en Spotify está lleno de eventos. Gracias a los elementos podemos crear páginas que reaccionen a las interacciones del usuario.
// También hay eventos que suceden automáticamente en nuestra web, no necesariamente tienen que ser activados por el usuario.

// console.log(1)

// // El objeto window es "más alto" que el document, hace referencia a absolutamente TODO, no sólo al HTML como lo sería con document.
// // Se usa addEventListener como método para asociar un evento.
// // Uso 'load' para definir que este evento será una carga del objeto window, es decir, este evento se ejecutará cuando todo el window cargue. Carga todos los elementos JS y archivos que dependen del HTML, como imágenes o hojas de estilo(CSS) Está entre '' porque todos los eventos se definen dentro de estas.
// // Uso function como callback, es decir, cuando se ejecute 'load' ejecutá dicha función.
// window.addEventListener('load', function() {
//     console.log(2)
// })


// // El window.onload es básicamente lo mismo que lo de arriba sólo que con otra sintaxis. También acá aplico el callback "resumido".
// window.onload = loadCallback()

// // Puedo "resumir" el callback creando la función por apartado, esto es más que nada por si la función tiene bastante código.
// function loadCallback() {
//     console.log(3)
// }

// // En este caso uso como objeto document, ya que lo que voy a cargar es sólo la parte HTML. Como evento voy a cargar 'DOMContentLoaded', este evento (a diferencia de load) lo que hace es cargar única y exclusivamente SÓLO lo que es el contenido HTML. Ignora totalmente lo que son las imágenes u hojas de estilo. Por lo tanto, se va logear antes que el 'load' normal ya que carga más rápido.
// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4)
// })

// console.log(5)




// Seleccionar elemento HTML y asociarle un evento

// const btnEnviar = document.querySelector(".boton--primario") // Selecciono el elemento boton--primario y lo almeceno en el objeto btnEnviar. Creo el parámetro "evento" para hacer referencia al evento que está pasando
// btnEnviar.addEventListener('click', function(evento) { 
//     console.log(evento) // Hago un print de qué es evento, en este caso va printear toda la información del tipo de evento 'click'
//     evento.preventDefault() // Prevengo/Cancelo la acción/evento por defecto que ocurre, en este caso prevengo el submit que hace el btnEnviar. Se usa mayormente para validar formularios.
//     console.log("Enviando formulario") // Hago un print de cuando lo clickee me envie un texto
// })

// Otro ejemplo de porqué usar el parámetro evento/e/evt/event
// window.onscroll = function(evento) {
//     console.log(evento) // Cada vez que scrolle, es decir que ejecute el parámetro evento, va a hacer un print del tipo e información del evento.
// }




// Eventos de los inputs y textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const submitFormulario = document.querySelector(".formulario")

nombre.addEventListener('input', registrarTexto)
email.addEventListener('input', registrarTexto)
mensaje.addEventListener('input', registrarTexto)
submitFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    console.log("Enviaste el formulario")
})


function registrarTexto (evento) {
    datos[evento.target.id] = evento.target.value
    console.log(datos)
}




// Evento de submit
// En los formularios siempre hay un input/button tipo submit. Por lo tanto, al seleccionar simplemente la clase .formulario e indicando que es un evento tipo 'submit'  ya estoy asociando directamente este al boton. JS NO recomienda usar el evento 'click' para enviar formularios, el estándar es submit.


