let yojan = {
  nombre: 'Yojan',
  apellido: 'Hungría',
  edad: 27,
  peso: 75
}

console.log(`Al inicio del año ${yojan.nombre} pesaba ${yojan.peso}kg`)


const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

/* 
function aumentaDePeso (persona){
  return persona.peso += 300
}
*/

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = yojan.peso - 3
let dias = 0


while (yojan.peso > META){
  // debugger

  if (comeMucho()){
    //aumentar de peso
    aumentaDePeso(yojan)
  }

  if (realizaDeporte()){
    //baja de peso
    adelgazar(yojan)
  }

  dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${yojan.nombre} adelgazó 3 kg`)