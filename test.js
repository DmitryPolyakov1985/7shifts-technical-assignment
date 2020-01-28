const assert = require('chai').assert
const string1 = require('./string-calculator')

describe('stringCalculator', function() {
    it('should return 0 when input string is empty', function() {
        assert.equal(string1.add(''), 0);
    });
    it('returned total should be an integer', function() {
        assert.equal(string1.add('1,2,5') % 1, 0);
    });
    it('new line \\n should be replaced with a comma', function() {
        assert.equal(string1.add('1\n,2,3'), 6);
        assert.equal(string1.add('1,\n2,4'), 7);
    });
    it('checking input with customer delimiter', function() {
        assert.equal(string1.add('//;\n1;2;3'), 6);
        assert.equal(string1.add('//%\n1%4%5'), 10);
    });
    it('numbers larger than 1000 should be ignored', function() {
        assert.equal(string1.add('//;\n1001;2'), 2);
        assert.equal(string1.add('//%\n2%1000%1'), 1003);
    });
});