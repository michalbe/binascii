'use strict';

// Based on https://docs.python.org/2/library/binascii.html
var binascii = (function(){

  var hexlify = function(str) {
    var result = '';
    for (var i=0, l=str.length; i<l; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
  };

  var unhexlify = function(str) {
    var result = '';
    for (var i=0, l=str.length; i<l; i+=2) {
      result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
    }
    return result;
  };


  return {
    b2a_hex: hexlify,
    hexlify: hexlify,

    a2b_hex: unhexlify,
    unhexlify: unhexlify
  };

})();

module.exports = binascii;
