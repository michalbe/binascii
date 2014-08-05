'use strict';

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
    hexlify: hexlify,
    unhexlify: unhexlify
  };

})();

module.exports = binascii;
