const assert = require('assert');
const calculator = require('../app/calculator');

describe("Calculator Tests", () => {
    // Addition Tests
    it('add(5, 2) expected result 7 - PASS', function () {
        assert.equal(calculator.add(5, 2), 7);
    });
    it('add(5, 2) expected result 8 - FAIL', function () {
        assert.equal(calculator.add(5, 2), 8); 
    });

    // Subtraction Tests
    it('sub(5, 2) expected result 3 - PASS', function () {
        assert.equal(calculator.sub(5, 2), 3); 
    });

    it('sub(5, 2) expected result 5 - FAIL', function () {
        assert.equal(calculator.sub(5, 2), 5); 
    });

    // Multiplication Tests
    it('mul(5, 2) expected result 10 - PASS', function () {
        assert.equal(calculator.mul(5, 2), 10); 
    });

    it('mul(5, 2) expected result 12 - FAIL', function () {
        assert.equal(calculator.mul(5, 2), 12);
    });
    
    // Division Tests
    it('div(10, 2) expected result 5 - PASS', function () {
        assert.equal(calculator.div(10, 2), 5);
    });

    it('div(10, 2) expected result 2 - FAIL', function () {
        assert.equal(calculator.div(10, 2), 2);
    });
});