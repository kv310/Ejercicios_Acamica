function imprimirEscalera(n) {
    for(let i = 0; i< n; i++) { //Me paro en una fila
        let resultadoFila = "";
        let espaciosFila = "";
        let numeralesFila = "";

        //Completar la fila con espacios
        espaciosFila = stringConSimbolo(n - (i+1), " ");
        
        //Completar la fila con #
        numeralesFila = stringConSimbolo(i+1, "#");

        resultadoFila = espaciosFila + numeralesFila;
        console.log(resultadoFila);
    }

}


function stringConSimbolo(n, simbolo) {
    let resultado = "";
    for(let i = 0; i < n; i++) {
        resultado += simbolo;
    }

    return resultado;
}

imprimirEscalera(4);