'use strict';
exports.__esModule = true;
exports["default"] = exports.a2b_hex = exports.b2a_hex = exports.unhexlify = exports.hexlify = void 0;
// Based on https://docs.python.org/2/library/binascii.html
var hexlify = function (str) {
    var result = '';
    var padding = '00';
    for (var i = 0, l = str.length; i < l; i++) {
        var digit = str.charCodeAt(i).toString(16);
        var padded = (padding + digit).slice(-2);
        result += padded;
    }
    return result;
};
exports.hexlify = hexlify;
exports.b2a_hex = hexlify;
var unhexlify = function (str) {
    var result = '';
    for (var i = 0, l = str.length; i < l; i += 2) {
        result += String.fromCharCode(parseInt(str.substr(i, 2), 16));
    }
    return result;
};
exports.unhexlify = unhexlify;
exports.a2b_hex = unhexlify;
var all = {
    hexlify: hexlify,
    unhexlify: unhexlify,
    b2a_hex: hexlify,
    a2b_hex: unhexlify
};
exports["default"] = all;
