let horoscopo = prompt('¿ Cuál es tu signo ? : ')

const signo = {
  aries: '21 marzo - 19 abril',
  tauro:'20 abril - 20 mayo',
  geminis:'21 mayo - 20 junio',
  cancer:'21 junio - 22 julio',
  leo:'23 julio - 22 agosto',
  virgo:'23 agosto - 22 septiembre',
  libra: '23 septiembre - 22 octubre',
  escorpion: '23 octubre - 21 noviembre',
  sagitario:'22 noviembre - 21 diciembre',
  capricornio: '22 diciembre - 19 febrero',
  acuario:'20 enero - 18 febrero',
  piscis:'19 febrero - 20 marzo'
}

switch(horoscopo){
  case 'aries': 
    console.log(signo.aries)
    break
  case 'tauro':
    console.log(signo.tauro)
    break
  case 'geminis':
  case 'géminis':
    console.log(signo.geminis)
    break
  case 'cancer':
  case 'cáncer':
    console.log(signo.cancer)
    break
  case 'leo':
    console.log(signo.leo)
    break
  case 'virgo':
    console.log(signo.virgo)
    break
  case 'libra':
    console.log(signo.libra)
    break
  case 'escorpion': 
    console.log(signo.escorpion)
    break
  case 'sagitario':
    console.log(signo.sagitario)
    break
  case 'capricornio':
    console.log(signo.capricornio)
    break
  case 'acuario':
    console.log(signo.acuario)
    break
  case 'piscis':
    console.log(signo.piscis)
    break
  default:
    console.log('No es un signo sodiacal válido')
    break
}