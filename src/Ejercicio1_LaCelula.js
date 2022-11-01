let celula = {
  nombre: 'linfocito',
  tipo: 'sanguínea',
  tamaño: '8-18 μ',
  inmunitaria: true,
  cantidadμL: 3000,
  mitosis: function(){
    celulaHija1 ={...this};
    celulaHija2 ={...this};
    celula = {};
  },
}

let celulaHija1, celulaHija2 = {};

celula.mitosis();

console.log('Hija1: ', celulaHija1);
console.log('Hija2: ', celulaHija2);
