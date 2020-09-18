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
const META = yojan.peso - 3

const aumentaDePeso = persona => persona.peso += PESO_FIJO

const adelgaza = persona => persona.peso -= PESO_FIJO

const comeMucho = Math.random < 0.3
const realizaDeporte = Math.random < 0.4
var dias = 0


while (yojan.peso > META){

  if (comeMucho()){
    aumentaDePeso(yojan)
  }
  if (realizaDeporte()){
    adelgaza(yojan)
  }
  dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${yojan.nombre} adelgazó 3 kg`)