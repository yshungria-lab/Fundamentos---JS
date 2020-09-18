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

function mayorDeEdad ({persona}){
  console
}