let btnCrearMatriz = <HTMLButtonElement>(
  document.getElementById("btnCrearMatriz")
);
let mostrarMatriz = <HTMLDivElement>document.getElementById("mostrarMatriz");
let miMatriz: number[][] = new Array();
let arrValoresFila: number[] = new Array();
let arrAuxiliar: number[] = new Array();
let filas: number = 0;
let columnas: number = 0;

function generarFila(arrAuxiliar: number[], largo: number) {
  let arregloInterno: number[] = new Array();
  for (let i = 0; i < largo; i++) {
    arregloInterno.push(Number(prompt("ingrese un valor")));
  }
  return arregloInterno;
}

function generarMatriz(matriz: any[], filas: number, columnas: number) {
  for (let i = 0; i < filas; i++) {
    //matriz.push(generarFila(arrAuxiliar, columnas));
    matriz[i] = [generarFila(arrAuxiliar, columnas)];
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

function mostrarFormatoMatriz(matriz: any[]) {
  let palabra = "";
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas - 1; j++) {
      palabra += matriz[[i][j]];
      palabra += ",";
    }
    palabra += "<br/>";
  }
  return palabra;
}

btnCrearMatriz.addEventListener("click", () => {
  filas = Number(prompt("ingrese la cantidad de filas para la matriz"));
  columnas = Number(prompt("ingrese la cantidad de columnas para la matriz"));
  generarMatriz(miMatriz, filas, columnas);

  ValorarFila(miMatriz, arrValoresFila);
  ordenarFilasDescendentes(miMatriz, arrValoresFila);
  console.log(miMatriz);
  mostrarMatriz.innerHTML = String(mostrarFormatoMatriz(miMatriz));
});
