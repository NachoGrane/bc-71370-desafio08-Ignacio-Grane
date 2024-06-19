import './css/style.css';

/* Inciso 1 */
console.warn('Inciso 1');
let a = 10;
let b = 12;
let temp;
console.log(a);
console.log(b);
temp = b;
b = a;
a = temp;
console.log(a);
console.log(b);

/* Inciso 2 */
console.warn('Inciso 2');

function mayorOMenor(num1, num2) {
  if (num1 > num2) {
    return true;
  } else return false;
}
const numero1 = 10;
const numero2 = 10;
if (mayorOMenor(numero1, numero2)) {
  console.log(`El número ${numero1} es mayor que el número ${numero2}`);
} else console.log(`El número ${numero2} es mayor que el número ${numero1}`);

/* Inciso 3 */
console.warn('Inciso 3');
const numero3 = 22;
function parOImpar() {
  if (numero3 % 2 === 0) {
    return true;
  } else return false;
}
if (parOImpar()) {
  console.log(`El número ${numero3} es par.`);
} else console.log(`El número ${numero3} es impar.`);

/* Inciso 4 */
console.warn('Inciso 4');
const precioProducto = 1000;
const descuento = 0.1; // 10%

function calcularPrecioFinal() {
  return precioProducto - precioProducto * descuento;
}
console.log(
  `El precio final del producto con precio $${precioProducto} y un descuento del 10% es de $${calcularPrecioFinal()}`,
);

/* Inciso 5 */
console.warn('Inciso 5');
const radio = 2;
function calcularArea() {
  return Math.PI * (radio * radio);
}
console.log(`El área de un circulo con radio ${radio} es de ${calcularArea()}`);
/* Inciso 6 */
console.warn('Inciso 6');
const tempCelcius = 17;
function convertirTemperatura() {
  return (tempCelcius * 9) / 5 + 32;
}
console.log(
  `El equivalente de ${tempCelcius}°C en Farenheit es ${convertirTemperatura()}ºF`,
);

/* Inciso 7 */
console.warn('Inciso 7');
for (let i = 1; i < 11; i++) {
  console.log(`El número leido es el ${i}`);
}

/* Inciso 8 */
console.warn('Inciso 8');
// let numeroUsuario = prompt('Ingrese un número');
// if (numeroUsuario < 0) {
//   console.log(`El número ingresado ${numeroUsuario} es negativo`);
// } else {
//   console.log(`El número ingresado fue el ${numeroUsuario}`);
//   while (numeroUsuario > 0) {
//     numeroUsuario = prompt('Ingrese un número');
//     console.log(`El número ingresado fue el ${numeroUsuario}`);
//   }
//   console.log(`El número ingresado ${numeroUsuario} es negativo`);
// }

/* Inciso 9 */
console.warn('Inciso 9');

// const numeroAMultiplicar = prompt('Ingrese un número');
// for (let i = 1; i < 11; i++) {
//   console.log(`${numeroAMultiplicar} * ${i} = ${numeroAMultiplicar * i}`);
// }

/* Inciso 10 */
console.warn('Inciso 10');
// let indice = 1;
// let sumaNumPares = 0;
// while (indice <= 100) {
//   if (indice % 2 === 0) {
//     console.log(`${indice} es par`);
//     sumaNumPares = sumaNumPares + indice;
//   }
//   indice++;
// }
// console.log(`La suma de todos los números pares es de ${sumaNumPares}`);

/* Inciso 11 */
console.warn('Inciso 11');

const persona = {
  nombre: 'Ignacio',
  apellido: 'Grané',
  edad: '27',
  ciudad: 'La Plata',
  presentarse() {
    let string = `Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en la ciudad de ${this.ciudad}`;
    console.log(string);
  },
};

persona.presentarse();

/* Inciso 12 */
console.warn('Inciso 12');

const arrayPersonas = [
  {
    nombre: 'Pepe',
    apellido: 'Rodriguez',
    edad: '69',
    ciudad: 'Lomas de Zamora',
    presentarse() {
      let string = `Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en la ciudad de ${this.ciudad}`;
      console.log(string);
    },
  },
  {
    nombre: 'Chiara',
    apellido: 'Cati',
    edad: '3',
    ciudad: 'Mendoza',
    presentarse() {
      let string = `Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en la ciudad de ${this.ciudad}`;
      console.log(string);
    },
  },
  {
    nombre: 'Martin',
    apellido: 'Gomez',
    edad: '45',
    ciudad: 'Chimpai',
    presentarse() {
      let string = `Mi nombre es ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en la ciudad de ${this.ciudad}`;
      console.log(string);
    },
  },
];

for (let i = 0; i < arrayPersonas.length; i++) {
  arrayPersonas[i].presentarse();
}

/* Inciso 13 */
console.warn('Inciso 13');

const arrayNumeros = [10, 8, 5, 6, 4, 1, 2, 7];
const cantElementos = arrayNumeros.length;
let sumaElementos = 0;
function calcularPromedio() {
  for (let i = 0; i < arrayNumeros.length; i++) {
    sumaElementos = sumaElementos + arrayNumeros[i];
  }
  let promedio = sumaElementos / cantElementos;
  return promedio;
}
console.log(
  `El promedio de todos los números del array es de ${calcularPromedio()}`,
);
