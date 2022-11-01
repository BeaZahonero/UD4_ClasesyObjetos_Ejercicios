let celula = {
  nombre: 'linfocito',
  tipo: 'sanguínea',
  tamaño: '8-18 μ',
  inmunitaria: true,
  cantidadμL: 3000,
  mitosis: function(){
    let celulaHija1 ={...this};
    let celulaHija2 ={...this};
    celula = {};

    console.log('Hija1: ', celulaHija1);
    console.log('Hija2: ', celulaHija2);
  },
}
celula.mitosis();

