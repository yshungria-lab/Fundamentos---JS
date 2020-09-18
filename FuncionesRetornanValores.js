var yojan = {
  nombre: 'Yojan',
  apellido: 'Hungría',
  edad: 27,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var diana = {
  nombre: 'Diana',
  apellido: 'Solis',
  edad: 17
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }

}

imprimirProfesiones(yojan)

function imprimirSiEsMayorDeEdad(persona){
  console.log(`${persona.nombre} Bienvenid@!!!: `)
  if (persona.edad >= 18){
     console.log(`${persona.nombre} eres mayor de edad`)
  }
  else{
    console.log(` ${persona.nombre} eres menor de edad`)
  }
}
imprimirSiEsMayorDeEdad(yojan)
imprimirSiEsMayorDeEdad(diana)

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function mayorDeEdad (persona){
  if (esMayorDeEdad){
     console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
mayorDeEdad(yojan)
mayorDeEdad(diana)

