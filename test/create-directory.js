'use strict'

var createDirectory = require('../lib/create-directory')
var should = require('should')

describe('directory » create', function () {
  describe('brand', function () {
    var brand = createDirectory(require('../lib/dir/brand.json'))

    it('prints name under detection', function () {
      const { data, output } = brand('chinook')
      data.should.be.equal('Chinook')
      output.should.be.equal('')
    })

    it('undefined under non detection', function () {
      const { data, output } = brand('foobar')
      should(data).be.undefined()
      output.should.be.equal('foobar')
    })
  })
})
