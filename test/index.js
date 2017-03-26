'use strict'

const should = require('should')

const directory = require('..')

describe('directory', function () {
  it('nothing to detect', function () {
    const { data } = directory('')
    should(data).be.eql({})
  })

  describe('only detect brand', function () {
    const expectedData = {brand: 'Chinook'}
    const expectedOutput = ' PRO 1 ALLOY BOOM'
    ;[
      'CHINOOK PRO 1 ALLOY BOOM',
      'chinook PRO 1 ALLOY BOOM',
      'Chinook PRO 1 ALLOY BOOM'
    ].forEach(function (str) {
      it(`${str} → Chinook`, function () {
        const { data, output } = directory(str)
        should(data).be.eql(expectedData)
        should(output).be.equal(expectedOutput)
      })
    })
  })
})
