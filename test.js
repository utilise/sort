var expect = require('chai').expect
  , sort = require('./')

describe('sort', function() {

  it('should sort array', function() {
    expect(sort(Boolean)([0,1,0,2])).to.be.eql([0,0,2,1])
  })

})