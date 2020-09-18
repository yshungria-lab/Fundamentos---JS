function persona(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

persona.prototype.saludar = function () {
  console.log(` Hola me llamo ${this.nombre} ${this.apellido}`)
}

let yojan = new persona('Yojan', 'Hungria')

let erika = new persona('Erika', 'Luna')

let arturo = new persona('Arturo', 'Vidal')

console.log(yojan)
console.log(yojan.saludar())
console.log(erika)
console.log(erika.saludar())
console.log(arturo)
console.log(arturo.saludar())