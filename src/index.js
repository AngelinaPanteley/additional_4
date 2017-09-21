//var Big = require('big.js');
//Big.E_POS = 100;
//Big.DP = 100;
module.exports = function multiply(first, second) {
var bigdecimal = require("bigdecimal");
//function multiply(first, second) {
  //var x=new Big(+first);
  //var y=new Big(+second);
  //var z=new Big(x*y);
  //return z.toString();
  var x = new bigdecimal.BigDecimal(+first);
  var y = new bigdecimal.BigDecimal(+second);
  var z = bigdecimal.BigDecimal(0);
  z = x.multiply(y);
  return z.toBigInteger().toString();
}

//multiply('329568934658432659586', '58379426534596');