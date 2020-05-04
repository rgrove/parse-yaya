/* eslint-env jest */
'use strict';

const parseYaya = require('../index');

describe('parseYaya()', () => {
  it('parses Yaya', () => {
    let result = parseYaya('{"key": "value",/* and now, an array */"key2": ["value1", "value2",]}, // trailing comment');

    expect(result).toEqual({
      key: 'value',
      key2: [ 'value1', 'value2' ]
    });
  });
});
