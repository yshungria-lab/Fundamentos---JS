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

let personas = [yojan, alan, martin, dario, vicky, paula]

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})
/*
const pasarAlturaACms = persona => {
  // persona.altura = persona.altura * 100
   return {
     ...persona, 
     altura: persona.altura * 100
   }
  }
*/


let personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
console.log(personas)

// Para verificar que es un nuevo objeto 
console.log(personas[0] === personasCms[0])

personas[0].nombre = 'Stiben'
console.log(personas)