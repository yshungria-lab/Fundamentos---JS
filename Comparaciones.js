var x = 4, y = '4'

// x == y es true (Cambio el tipo de dato a string)
// x === y es false ( X es un numero y Y es un string)

// Es conveniente usar el ==== (en produción es obligatorio usarlo)

var yojan = {
  nombre: 'Yojan'
}

var mismaPersona = {
  nombre: 'Yojan'
}

var otraPersona = yojan

/* es un nuevo objeto y al comparar yojan con otraPersona2 el resultado va a ser falso, porque por mas que tenga el mismo valor ya es un objeto o parametro como referencia
*/


var otraPersona2 = {
  ...yojan,
}