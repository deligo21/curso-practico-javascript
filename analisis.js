function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (mitad % 2 === 0){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//MEdiana General

const salariosBol = bolivia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosBolSorted = salariosBol.sort(
    function(salaryA, salaryB){
        return salaryA -salaryB;
    }
);

const medianaGeneralBol = medianaSalarios(salariosBolSorted);

//Mediana del top 10%

const spliceStart = (salariosBolSorted.length * 0.90);
const spliceCount = salariosBolSorted.length - spliceStart;

const salariosTop10Bol = salariosBolSorted.splice(spliceStart, spliceCount); 
const medianaTop10Bol = medianaSalarios(salariosTop10Bol);

console.log({
    medianaGeneralBol,
    medianaTop10Bol
});