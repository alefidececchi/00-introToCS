'use strict'
function BinarioADecimal(num) {
  // tu codigo aca

  /**
   * tomar el numero (0 o 1) y multiplicarlo por la base dos elevado a su posicion 
   * la ultima posicion es cero, es decir, no está ordenado como un array, resolver eso
   * 
   */

  var arrNumber = String(num)
    .split('')
    .reverse();

  var total = 0;

  arrNumber.forEach((e, ind) => {
    total += (e * Math.pow(2, ind));
  })
  return total;
}



function DecimalABinario(num) {
  // tu codigo aca

  var arrBinary = [];

  while (num > 0) {
    arrBinary.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  return arrBinary.join('');

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}