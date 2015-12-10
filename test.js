var expect = require('chai').expect
  , sort = require('./')

describe('sort', function() {

  it('should sort array', function() {
    expect(sort(az)([0,1,0,2])).to.be.eql([0,0,1,2])

    function az(a, b) {
      return a > b ?  1
           : a < b ? -1
                   :  0
    }
  })

})