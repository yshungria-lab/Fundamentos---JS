var yojan = {
    nombre: 'Yojan',
    apellido: 'Hungria',
    altura: 1.80
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

/*
otra manera de ver el arrow functions
const esAlta = (persona) => {
  return persona.altura >= 1.8
}

*/

/*
Otra manera de hacer lo mismo:

let personasAltas = personas.filter
(function (persona)){
  return persona.altura >= 1.8
}
*/

//const esAlta = persona => persona.altura >= 1.8


const esAlta = ({ altura }) => altura >= 1.8

let personas = [ yojan, alan, martin, dario, vicky, paula ]

let personasAltas = personas.filter(esAlta)

console.log(personasAltas)

// Determina la cantidad de personas bajas

const esBaja = ({ altura }) => altura < 1.8

let personas2 = [ yojan, alan, martin, dario, vicky, paula ]

let personasBajas = personas.filter(esBaja)

console.log(personasBajas)




