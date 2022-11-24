// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma=0;
    for (var i=1;i<11;i++){
        suma=suma+i;
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = [];
  for (numero of array){
    if (numero % 2==0){
      pares.push(numero);
    }
  }
  return pares;
  }

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var alCuadrado=[];
  /*alCuadrado = array.map( function (elemento){
        return (elemento*elemento)
  })*/;
  for (var i=0;i<array.length;i++){
    alCuadrado.push(Math.pow (array[i],2));
  }
  return alCuadrado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma=0;
  for (var i=0;i<array.length;i++){
    suma=suma+array[i];
  }
  return suma;
  /*suma=array.reduce(function(suma,num){
    return suma+num;
  })*/
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
