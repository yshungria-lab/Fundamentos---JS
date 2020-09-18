var yojan = {
  nombre: 'Yojan',
  apellido: 'Hungría',
  edad: 27
}

var albeiro = {
  nombre: 'Albeiro',
  apellido: 'Gomez',
  edad: 31
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(yojan)
imprimirNombreEnMayusculas(albeiro)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad(persona) {
  console.log(`Hola, me llamo ${yojan.nombre} y tengo ${yojan.edad} años `)

  console.log(`Hola, me llamo ${albeiro.nombre} y tengo ${albeiro.edad} años`)
  // Hola, me llamo Yojan y tengo 27 años
  // Hola, me llamo Albeiro y tengo 31 años
}

imprimirNombreYEdad()