var yojan = {
  nombre: 'Yojan',
  apellido: 'Hungria',
  edad: 27
}

var albeiro = {
  nombre: 'Albeiro',
  apellido: 'Gomez',
  edad: 31
}

function imprimirNombreEnMayusculas({ nombre, apellido }) {
  console.log(nombre.toUpperCase())
  console.log(apellido.toLowerCase())
}

imprimirNombreEnMayusculas(yojan)
imprimirNombreEnMayusculas(albeiro)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
//imprimirNombreEnMayusculas({ apellido: 'Gomez' })