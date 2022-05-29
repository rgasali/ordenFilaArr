let miMatriz: number[][] = new Array();
let arrValoresFila: number[] = new Array();

function sumarValores(arreglo: number[]) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultado = Number(resultado + arreglo[i]);
  }
  return resultado;
}

function ValorarFila(matriz: any[], arregloDeValores: number[]) {
  for (let i = 0; i < matriz.length; i++) {
    arregloDeValores.push(sumarValores(matriz[i]));
  }
}

function comparar(numeroIzq: number, numeroDer: number) {
  if (numeroIzq === numeroDer) {
    return 0;
  } else if (numeroIzq > numeroDer) {
    return 1;
  } else return -1;
}

function ordenarFilasDescendentes(matriz: any[], arregloDeValores: number[]) {
  for (let j = 0; j < arregloDeValores.length; j++) {
    for (let i = 0; i < arregloDeValores.length; i++) {
      if (comparar(arregloDeValores[i + 1], arregloDeValores[i]) === 1) {
        let auxiliar: number = arregloDeValores[i];
        arregloDeValores[i] = arregloDeValores[i + 1];
        arregloDeValores[i + 1] = auxiliar;

        let filaAux: number = matriz[i];
        matriz[i] = matriz[i + 1];
        matriz[i + 1] = filaAux;
      }
    }
  }
}

miMatriz.push([4, 5, 6]);
miMatriz.push([1, 2, 3]);
miMatriz.push([7, 8, 9]);

console.log(miMatriz);
ValorarFila(miMatriz, arrValoresFila);
console.log(arrValoresFila);

console.log("despues  de ordenarlos");
ordenarFilasDescendentes(miMatriz, arrValoresFila);
console.log(miMatriz);
console.log(arrValoresFila);
