module.exports = function multiply(first, second) {
  var splitFirst = first.split("");
  var splitSecond = second.split("");
  var reverseFirst = splitFirst.reverse(); 
  var reverseSecond = splitSecond.reverse(); 
  var productLength=reverseFirst.length+reverseSecond.length;
  var firstLength=reverseFirst.length;
  var secondLength=reverseSecond.length;
  var product=new Array(productLength+1);
  for(var i=0;i<productLength+1;i++) {
    product[i]=0;
  }
  for(var i=0;i<firstLength;i++) {
    for(var j=0;j<secondLength;j++) {
      product[i+j]+=(+reverseFirst[i])*(+reverseSecond[j]);
    }
  }
  for (var i = 0; i< productLength; i++)
  {
      product[i + 1] += Math.floor(product[i] / 10);
      product[i] %= 10;
      product[i]=String(product[i]);
  }
  while(product[productLength]===0||product[productLength]==='0'){
    productLength--;
    product.splice(productLength+1,1);
  }
  var result="";
  for(var i=productLength;i>=0;i--) {
    result+=product[i];
  }
  return result;
}
