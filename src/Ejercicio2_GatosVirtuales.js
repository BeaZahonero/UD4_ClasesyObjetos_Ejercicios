import { alimentar } from './Ejercicio2_GatosVirtuales_Modulos.js';
let g1;
class Gato {
  validado = false;
  constructor(hambre, cansancio, felicidad){
    this.hambre = hambre;
    this.cansancio = cansancio;
    this.felicidad = felicidad;
  }
  estado(){
    console.log(`Mi estado es: ${this.hambre}% hambriento, ${this.cansancio}% cansado y ${this.felicidad}% feliz.`);
  }
  diHolaArrow = () => console.log(`arrow hola soy ${this.nombre}`);
}
g1 = new Gato (20, 30, 50);

alimentar(g1);
// function alimentar(gato){
//   console.log(gato.hambre = gato.hambre - Math.floor(Math.random()*100));
  
//   // let result = gato.hambre - Math.random()*10;
//   // console.log('result: ', result);
//   // return result;
// }

g1.estado();