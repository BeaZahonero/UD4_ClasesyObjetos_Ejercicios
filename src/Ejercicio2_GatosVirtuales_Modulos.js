function alimentar(gato){
  gato.hambre = gato.hambre - Math.floor(Math.random()*100);
  console.log('gatohambre: ', gato.hambre);
  return gato.hambre;
}

function dormir(gato){
  gato.hambre = gato.hambre - Math.floor(Math.random()*100);
  console.log('gatohambre: ', gato.hambre);
  return gato.hambre;
}

function jugar(gato){
  gato.hambre = gato.hambre - Math.floor(Math.random()*100);
  console.log('gatohambre: ', gato.hambre);
  return gato.hambre;
}

export {
  alimentar, dormir, jugar
}