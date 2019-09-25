function imprimirEscalera(n) {
    for(let i = 0; i< n; i++) { //Me paro en una fila
        let espaciosFila = "";
        let numeralesFila = "";

        //Completar la fila con espacios
        espaciosFila = stringConSimbolo(n - (i+1), " ");
        
        //Completar la fila con #
        numeralesFila = stringConSimbolo(i+1, "#");
        console.log(espaciosFila + numeralesFila);
    }

}


function stringConSimbolo(n, simbolo) {
    let resultado = "";
    for(let i = 0; i < n; i++) {
        resultado += simbolo;
    }
    return resultado;
}

imprimirEscalera(20);