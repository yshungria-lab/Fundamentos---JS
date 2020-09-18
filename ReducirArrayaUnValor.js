var yojan = {
    nombre: 'Yojan',
    apellido: 'Hungria',
    altura: 1.80,
    libros: 33
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    libros: 102
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    libros: 78
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    libros: 70
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    libros: 50
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    libros: 100
}

let personas = [yojan, alan, martin, dario, vicky, paula]

/*
var acum = 0 

for (let i = 0; i < personas.length; i++){
  acum = acum + personas[i].libros
}
*/

/*
const reducer = (acum, persona) => {
  return acum + persona.libros
}
*/

const reducer = (acum, { libros }) => acum + libros

let totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tiene ${totalDeLibros} libros `) 