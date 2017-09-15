// Validate the Sale Price is Greater than MSRP

// salePrice>MSRP

// Validate Zip Code in the New Client Form is numeric only

"use strict";

var assert = require('chai').assert;

describe('Something', function() {

    it('should be an integer', function() {

        var result = iShouldReturnInt();

        assert.isNumber(result);

        var isInt = result % 1 === 0;
        assert(isInt, 'not an integer:' + result);
    });
});
