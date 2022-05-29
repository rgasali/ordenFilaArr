let btnCrearMatriz = <HTMLButtonElement>(
  document.getElementById("btnCrearMatriz")
);
let mostrarMatriz = <HTMLDivElement>document.getElementById("mostrarMatriz");
let miMatriz: number[][] = new Array();
let arrValoresFila: number[] = new Array();
let arrAuxiliar: number[] = new Array();

function generarFila(arrAuxiliar: number[], largo: number) {
  for (let i = 0; i < largo; i++) {
    arrAuxiliar.push(Number(prompt("ingrese un valor")));
  }
  return arrAuxiliar;
}

function generarMatriz(matriz: any[], filas: number, columnas: number) {
  for (let i = 0; i < filas; i++) {
    matriz.push(generarFila(arrAuxiliar, columnas));
  }
}

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

btnCrearMatriz.addEventListener("click", () => {
  generarMatriz(
    miMatriz,
    Number(prompt("ingrese la cantidad de filas para la matriz")),
    Number(prompt("ingrese la cantidad de columnas para la matriz"))
  );
  ValorarFila(miMatriz, arrValoresFila);
  ordenarFilasDescendentes(miMatriz, arrValoresFila);
  console.log(miMatriz);
  //mostrarMatriz.innerHTML(miMatriz)
});
