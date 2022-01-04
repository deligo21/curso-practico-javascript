function calcularMediana(lista){
    
    function ordenarLista(lista){
        for (let i = 0; i < lista.length; i++) {
        
            for (let j = 0; j < lista.length; j++) {
                if(lista[i] < lista[j]){
                    let aux = lista[j];
                    lista[j] = lista[i];
                    lista[i] = aux
                }
            }
        }
    }

    function calcularMediaAritmetica(lista){

        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    }

    ordenarLista(lista);

    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;

    if (lista.length % 2 === 0) {
        const elem1 = lista[mitadLista1 -1];
        const elem2 = lista[mitadLista1];
    
        const promedioElem1yElem2 = calcularMediaAritmetica([elem1, elem2]);
    
        mediana = promedioElem1yElem2;
    }
    else{
        mediana = lista[mitadLista1];
    }

    return mediana
}


