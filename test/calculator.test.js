const assert = require('assert');
const calculator = require('../app/calculator');

describe("Calculator Tests", () => {
    // Addition Tests
    it('add', function () {
        assert.equal(calculator.add(5, 2), 7);
        console.log('add(5, 2) expected result 7 - PASS');
    });
    it('add', function () {
        assert.equal(calculator.add(5, 2), 8); 
        console.log('add(5, 2) expected result 8 - FAIL');
    });

    // Subtraction Tests
    it('sub', function () {
        assert.equal(calculator.sub(5, 2), 3); 
        console.log('sub(5, 2) expected result 3 - PASS');
    });

    it('sub', function () {
        assert.equal(calculator.sub(5, 2), 5); 
        console.log('sub(5, 2) expected result 5 - FAIL');
    });

    // Multiplication Tests
    it('mul', function () {
        assert.equal(calculator.mul(5, 2), 10); 
        console.log('mul(5, 2) expected result 10 - PASS');
    });

    it('mul', function () {
        assert.equal(calculator.mul(5, 2), 12);
        console.log('mul(5, 2) expected result 12 - FAIL');
    });
    
    // Division Tests
    it('div', function () {
        assert.equal(calculator.div(10, 2), 5);
        console.log('div(10, 2) expected result 5 - PASS');
    });

    it('div', function () {
        assert.equal(calculator.div(10, 2), 2);
        console.log('\tdiv(10, 2) expected result 2 - FAIL');
    });
});