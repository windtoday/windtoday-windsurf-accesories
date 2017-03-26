'use strict'

const should = require('should')

const directory = require('..')

describe('directory', function () {
  it('under non detection, output is the string input', function () {
    const result = directory('foo')
    should(result).be.eql({
      data: {},
      output: 'foo'
    })
  })

  describe('only detect brand', function () {
    ;[
      'CHINOOK PRO 1 ALLOY BOOM',
      'chinook PRO 1 ALLOY BOOM',
      'Chinook PRO 1 ALLOY BOOM'
    ].forEach(function (str) {
      it(`${str} → Chinook`, function () {
        const result = directory(str)
        should(result).be.eql({
          data: {brand: 'Chinook'},
          output: ' PRO 1 ALLOY BOOM'
        })
      })
    })
  })
})
