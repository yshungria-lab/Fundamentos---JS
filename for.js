var yojan = {
  nombre: 'Yojan',
  apellido: 'Hungría',
  edad: 27,
  peso: 75
}

console.log(`Al inicio del año ${yojan.nombre} pesaba ${yojan.peso}kg`)

/* function aumentaDePeso (persona){
  return persona.peso += 200
}
*/
const PESO_FIJO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += PESO_FIJO

const adelgazar = persona => persona.peso -= PESO_FIJO


for (var i = 1; i <= DIAS_DEL_ANO; i++){
  var random = Math.random()
  
  if (random < 0.25){
    // aumenta de peso
    aumentarDePeso(yojan)
  }
  else if (random < 0.5){
    //disminuye de peso
    adelgazar(yojan)
  }
}

console.log(`Al final de año ${yojan.nombre} pesa ${yojan.peso.toFixed(2)}kg`)  