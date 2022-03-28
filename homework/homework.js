'use strict'
function BinarioADecimal(num) {
  // tu codigo aca

  var arrNumber = num.split('').reverse();
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