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

var personas = [ yojan, alan, martin, dario, vicky, paula ]

for (i = 0;  i < personas.length; i++){
  console.log(`La persona ${personas[i].nombre} mide ${personas[i].altura} metros `)
}


/*
console.log(personas)

console.log(personas[0])
console.log(personas[0].altura)
console.log(personas[0]['altura'])
console.log(personas)
*/
