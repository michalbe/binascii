'use strict';

var assert = require('assert');
var ba = require('../');

// HEXFLIFY
// One letter
assert.equal(ba.hexlify('A'), '41');

// String
assert.equal(ba.hexlify('Pamietamy 44'), '50616d696574616d79203434');
