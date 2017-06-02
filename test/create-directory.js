'use strict'

const strmatch = require('str-match')()
const should = require('should')

const directory = require('../lib/dir/brand.json')
const createDirectory = require('../lib/create-directory')

describe('directory » create', function () {
  describe('brand', function () {
    const brand = createDirectory(directory, strmatch)

    it('prints name under detection', function () {
      const { data, output } = brand('chinook')
      should(data).be.equal('Chinook')
      should(output).be.equal('')
    })

    it('undefined under non detection', function () {
      const { data, output } = brand('foobar')
      should(data).be.undefined()
      should(output).be.equal('foobar')
    })
  })
})
