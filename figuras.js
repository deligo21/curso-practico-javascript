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

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


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

//Triangulo Isosceles

const alturaTrianguloIsosceles = (base, lado) => Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2)/ 4))


//Aqui interactuamos con el html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("inputTriangulo3");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("alturaTriangulo");
    const value1 = Number(input1.value);
    const base = document.getElementById("inputTriangulo3");
    const value3 = Number(base.value);
    const area = areaTriangulo(value1, value3);
    alert("El area del triangulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaIsosceles(){
    const input1 = document.getElementById("inputIsosceles1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputIsosceles2");
    const value2 = Number(input2.value);
    const altura = alturaTrianguloIsosceles(value1, value2);
    alert("El area del triangulo es: " + altura);
}