'use strict';

/**
Parses a Yaya string and returns the result.

@param {string} yaya
@returns {*}
*/
function parseYaya(yaya) {
  return JSON.parse(yaya.replace(/\/\/.*(?:\n|$)|\/\*[\s\S]*?\*\/|,\s*(?=$|[}\]]|\/\/.*$)/g, ''));
}

module.exports = parseYaya;
