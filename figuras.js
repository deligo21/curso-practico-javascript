//Codigo del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = (lado) => lado * 4;
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

const areaCuadrado = (lado) => lado * lado;
//console.log("El area del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " 
//             + ladoTriangulo2 + "cm, " 
//             + baseTriangulo + "cm");

//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulo");

// const radioCirculo = 4;
const diametroCirculo = radio => radio * 2;
// const PI = Math.PI;

const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
const areaCirculo = radio => (radio * radio) * Math.PI;

// console.log("El radio del circulo es: " + radioCirculo + " cm");
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");
// console.log("PI es: " + PI);
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
// console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();
