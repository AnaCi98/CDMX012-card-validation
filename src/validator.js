function isValid(digitos) {
  let arreglo = Array.from(digitos);
  let arregloInverso = arreglo.reverse();
  let result = [];
  let i = 0, suma = 0, primerValor = 0, residuo = 0, pares = 0, final = 0;
  for (i = 0; i <= arregloInverso.length-1; i++) {

    if (i % 2 == 0) {
      result.push(arregloInverso[i]);
    }
    else {
      pares = arregloInverso[i] * 2;
      if (pares >= 10) {
        primerValor = Math.floor(pares / 10);
        residuo = pares % 10;
        suma = residuo + primerValor;
        result.push(suma)
      }
      else {
        result.push(pares)
      }
    }
  }
 let arregloFinal = result;
  function add(contador,numeros){
    return contador + parseInt(numeros);
  }
  final = arregloFinal.reduce(add,0);
  if(final%10==0){
    return true
  }
  else{
    return false
  }
}
function maskify(arreglo){
  let oculto = [];
  for (let i=0; i < arreglo.length; i++){
    if(i<arreglo.length-4){
      oculto.push("*");
    }
    else{
      oculto.push(arreglo[i]);
    }
  }
  return oculto.join("");
}
const validator = {
  isValid,
maskify,
}

export default validator;
