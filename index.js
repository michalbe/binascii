'use strict';

var binascii = (function(){

  var hexlify = function(str) {
    var result = '';
    for (var i=0, l=str.length; i<l; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  };

  return {
    hexlify: hexlify
  };
  
})();


console.log(binascii.hexlify('michal'));
